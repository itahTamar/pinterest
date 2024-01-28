import bcrypt from 'bcrypt';
import connection from '../../DB/database';
import jwt from 'jwt-simple';
import { User, Results } from '../interfaces/interfaces';
import { Request, Response } from 'express';

const saltRounds = 10;

export async function register(req: Request, res: Response) {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) throw new Error("no data at register user");

        const secret = process.env.SECRET
        if (!secret) throw new Error("no secret")

        const hash = await bcrypt.hash(password, saltRounds)

        const query = `INSERT INTO users (username, email, password) VALUES ('${username}' ,'${email}', '${hash}');`;

        connection.query(query, (err, resultsAdd: Results) => {
            try {
                if (err) throw err;
                if (resultsAdd.affectedRows) {
                    const queryUser = `SELECT * FROM my_books.users WHERE user_id = ${resultsAdd.insertId}`
                    connection.query(queryUser, (err2, results) => {
                        if (err2) throw err2;
                        const resultUserId = results[0].user_id
                        res.send({ ok: true, resultUserId })
                    })
                }
            } catch (error) {
                res.status(500).send({ ok: false, error })
            }
        })
    } catch (error) {
        res.status(500).send({ ok: false, error })
    }
} //

export async function login(req: Request, res: Response) {
    try {
        console.log("hallow from server-login")
        const { username, email, password } = req.body;
        console.log("email & password:", email, password)
        if (!username || !email || !password) throw new Error("no data at login user");

        const query = `SELECT * FROM users WHERE email = "${email}"`;
        if (!query) throw new Error("at login, No query provided for user login");

        connection.query(query, async (err, results: Results) => {
            const secret = process.env.SECRET
            if (!secret) throw new Error("no secret")

            try {
                if (err) throw err;

                if (results.length > 0) {
                    const hash = results[0].password
                    const match: boolean = await bcrypt.compare(password, hash);
                    if (!match) throw new Error("at login password incorrect!");

                    const resultUserId = results[0].user_id
                    const resultUserName = results[0].user_name

                    const cookie = {
                        uid: resultUserId,
                        role: results[0].role,
                    }
                    const token = jwt.encode(cookie, secret)

                    res.cookie("user", token, { httpOnly: true, maxAge: 1000 * 60 * 60 })
                    res.send({ ok: true, message: "user login!", resultUserName })
                } else {
                    throw new Error("user not found");
                }

            } catch (error) {
                res.status(500).send({ ok: false, error })
            }
        })

    } catch (error) {
        res.status(500).send({ ok: false, error })
    }
} //

export async function updateUser(req: Request, res: Response) {
    try {
        const { userId } = req.params;
        if (!userId) throw new Error("No Id provided on updateUser");
        const { field, update } = req.body;
        if (!field || !update) throw new Error("No field or update provided on updateUser");
        const query = `UPDATE users SET ${field} = '${update}' WHERE (user_id = ${userId});`;
        connection.query(query, (err, results: Results) => {
            try {
                if (err) throw err;
                if (results.changedRows) {
                    const queryUpdateUser = `SELECT * from users WHERE (user_id = ${userId});`
                    connection.query(queryUpdateUser, (err2, results2) => {
                        try {
                            if (err2) throw err2;
                            res.send({ ok: true, results2 })
                        } catch (error) {
                            console.log(error)
                            res.status(500).send({ ok: false, error })
                        }
                    })
                } else {
                    res.send({ ok: true, results: "no changes found" })
                }
            } catch (error) {
                console.log(error)
                res.status(500).send({ ok: false, error })
            }
        })
    } catch (error) {
        res.status(500).send({ ok: false, error })
    }
}

export async function deleteUser(req: Request, res: Response) {
    try {
        const {userId} = req.params;
        if (!userId) throw new Error("no Id")

        const query = `DELETE FROM users WHERE (user_id = ${userId});`;

        connection.query(query, (err, results: Results) => {
            try {
                if (err) throw err;
                if (results.affectedRows) {
                    res.send({ok: true, results})
                } else {
                    res.send({ok: true, results: "No rows were deleted"})
                }
            } catch (error) {
                console.log(error)
                res.status(500).send({ ok: false, error }) 
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({ ok: false, error }) 
    }
}

