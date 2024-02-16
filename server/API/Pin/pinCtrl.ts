import express from 'express';
import connection from '../../DB/database';

export async function addPin(req: express.Request, res: express.Response) {
    try {

        const { title, image, description, link } = req.body
        if (!title || !image) throw new Error("No title or image provided in FUNCTION addPin in FILE pinCtrl.ts")

        const { user_id } = req.params
        if (!user_id) throw new Error("at addPin no user_id in params");

        const usernameQuery = `SELECT username FROM users WHERE user_id=${user_id};`
        connection.query(usernameQuery, (err, results1) => {
            try {
                if (err) throw err;

                console.log(results1)
                const username1 = results1[0].username
                console.log(username1)
                const query = `INSERT INTO pins (title, image, description, link, user_id, username) VALUES (?, ?, ?, ?, ?, ?)`;
                connection.query(query, [title, image, description, link, user_id, username1], (err, results) => {
                    try {
                        if (err) throw err;
                        res.send({ ok: true, results })
                    } catch (error) {
                        res.status(500).send({ ok: false, error })
                    }
                })

                // res.send({ ok: true, results1 })
            } catch (error) {
                res.status(500).send({ ok: false, error })
            }
        })



    } catch (error) {
        res.status(500).send({ ok: false, error })
    }
} //work ok

export async function deletePin(req, res) {
    try {
        const { pin_id } = req.params;
        if (!pin_id) throw new Error("no Id")

        const query = `DELETE FROM pins WHERE (pin_id = ${pin_id});`;

        connection.query(query, (err, results) => {
            try {
                if (err) throw err;
                //@ts-ignore
                if (results.affectedRows) {
                    res.send({ ok: true, results })
                } else {
                    res.send({ ok: true, results: "No rows were deleted" })
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

export async function updatePin(req, res) {
    try {
        const { pin_id } = req.params;
        if (!pin_id) throw new Error("No Id provided on updatePin");
        const { field, update } = req.body;
        if (!field || !update) throw new Error("No field or update provided on updatePin");
        const query = `UPDATE pins SET ${field} = '${update}' WHERE (pin_id = ${pin_id});`;

        connection.query(query, (err, results) => {
            try {
                if (err) throw err;
                //@ts-ignore
                if (results.changedRows) {
                    const query2 = `SELECT * from pins WHERE (pin_id = ${pin_id});`
                    connection.query(query2, (err2, results2) => {
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
        console.log(error)
        res.status(500).send({ ok: false, error })
    }
}

export async function getAllUserSavedPinsByUserId(req: express.Request, res: express.Response) {
    try {
        const { user_id } = req.params
        const query = `SELECT * FROM pins WHERE user_id = "${user_id}";`
        connection.query(query, (err, results) => {
            try {
                if (err) throw err;
                res.send({ ok: true, results })
            } catch (error) {
                console.log(error)
                res.status(500).send({ ok: false, error })
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({ ok: false, error })
    }
} //work ok

export async function getAllUserCreatedPinsByUsername(req: express.Request, res: express.Response) {
    try {
        const { username } = req.params
        const query = `SELECT * FROM pins WHERE username = "${username}";`
        connection.query(query, (err, results) => {
            try {
                if (err) throw err;
                res.send({ ok: true, results })
            } catch (error) {
                console.log(error)
                res.status(500).send({ ok: false, error })
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({ ok: false, error })
    }
} //work ok

export async function getAllOtherUsersPins(req: express.Request, res: express.Response) {
    try {
        const user_id = req.params.user_id
        if (!user_id) throw new Error("at getAllOtherUsersPins no user id in params");

        const query = `SELECT * FROM pins where user_id != "${user_id}";`
        connection.query(query, (err, results) => {
            try {
                if (err) throw err;
                res.send({ ok: true, results })
            } catch (error) {
                console.log(error)
                res.status(500).send({ ok: false, error })
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({ ok: false, error })
    }
} //work ok

export async function getPinById(req: express.Request, res: express.Response) {
    try {
        const { pin_id } = req.params;
        if (!pin_id) throw new Error("no pin_id");

        const query = `SELECT * FROM pins WHERE (pin_id = ${pin_id})`

        connection.query(query, (err, results) => {
            try {
                if (err) throw err
                res.send({ ok: true, results })
            } catch (error) {
                console.log(error)
                res.status(500).send({ ok: false, error })
            }
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({ ok: false, error })
    }
} //work ok

export async function getPinsByCategory(req: express.Request, res: express.Response) {
    try {
        const category = req.params.category
        console.log(category)
        if (!category) throw new Error("at getPinsByCategory no category in params");

        const user_id = req.query.user_id
        console.log(user_id)
        if (!user_id) throw new Error("at getPinsByCategory no user id in query");
        const query = `SELECT * FROM pins WHERE user_id != "${user_id}" AND category = "${category}";`

        connection.query(query, (err, results) => {
            try {
                if (err) throw err;
                res.send({ ok: true, results })
            } catch (error) {
                console.log(error)
                res.status(500).send({ ok: false, error })
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({ ok: false, error })
    }
} //work ok