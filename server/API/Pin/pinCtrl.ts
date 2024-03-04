import express from 'express';
import connection from '../../DB/database';
import { Results } from '../interfaces/interfaces';

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
                const query = `INSERT INTO pins (title, image, description, link, username) VALUES (?, ?, ?, ?, ?, ?)`;
                connection.query(query, [title, image, description, link, username1], (err, results) => {
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

export async function editPin(req, res) {
    try {
        const { pin_id } = req.params;
        if (!pin_id) throw new Error("No Id provided on updatePin");
        const { title, description, link, board } = req.body;
        console.log(title, description, link, board)
        if (!title || !board) throw new Error("No data to update provided on EditPin");
        const query = `UPDATE pins SET title = '${title}', description = '${description}', link = '${link}', category = '${board}' WHERE (pin_id = ${pin_id});`
        connection.query(query, (err, results:Results) => {
            try {
                if (err) throw err;
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
} //work ok

export async function getAllUserSavedPinsByUserId(req: express.Request, res: express.Response) {
    try {
        const { user_id } = req.params
        if (!user_id) throw new Error("no user_id in params");

        const query = `SELECT * FROM user_favorites_pins WHERE user_id = "${user_id}";`
        connection.query(query, (err, results) => {
            try {
                if (err) throw err;
                console.log("save", results)
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
                res.send({ ok: true, results })  //{"ok": true,"results": []}
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

//get all other users pin by username
export async function getAllOtherUsersPinsByUsername(req: express.Request, res: express.Response) {
    try {
        const username = req.params.username
        if (!username) throw new Error("at getAllOtherUsersPins no username in params");

        const query = `SELECT * FROM pins where username != "${username}";`
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

//!fix to get the pin that the user did not save
export async function getPinsByCategory(req: express.Request, res: express.Response) {
    try {
        const category = req.params.category
        console.log(category)
        if (!category) throw new Error("at getPinsByCategory no category in params");

        const username = req.query.username
        console.log(username)
        if (!username) throw new Error("at getPinsByCategory no user id in query");
        const query = `SELECT * FROM pins WHERE username != "${username}" AND category = "${category}";`

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

//!need to fix to be no doplication - 
export async function savePinToUserByUserId(req: express.Request, res: express.Response) {
    try {
        const { pin_id } = req.params
        console.log(pin_id)
        if (!pin_id || pin_id == undefined) throw new Error("at savePinToUserByUserId no pin_id in params or it's undefine");

        const user_id = req.query.user_id
        console.log(user_id)
        if (!user_id) throw new Error("at savePinToUserByUserId no user_id in query");

        const query = `INSERT INTO user_favorites_pins IF NOT EXISTS (user_id, pin_id) VALUES (${user_id}, ${pin_id});`;
        connection.query(query, (err, results) => {
            try {
                if (err) throw err;
                res.send({ ok: true, results })
            } catch (error) {
                res.status(500).send({ ok: false, error })
            }
        })

    } catch (error) {
        console.error(error)
    }

} //!not work

//!need to fix in accordance to the new table of favorite
export async function findTitleAtOtherUsersPins(req: express.Request, res: express.Response) {
    try {
        const { user_id } = req.params
        if (!user_id) throw new Error("at getAllOtherUsersPins no user id in params");
        console.log("at findTitleAtOtherUsersPins at server side, user_id:", user_id)

        const { text } = req.query
        if (!text) throw new Error("no text at req.body");
        console.log("at findTitleAtOtherUsersPins at server side, text:", text)

        const query = `SELECT * FROM pins WHERE title LIKE "%${text}%";`
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
} //


//!need to fix in accordance to the new table of favorite
export async function findTitleAtUserSavedPinsByUserId(req: express.Request, res: express.Response) {
    try {
        const { user_id } = req.params
        if (!user_id) throw new Error("at getAllOtherUsersPins no user id in params");

        const { title } = req.query
        if (!title) throw new Error("no title at req.body");

        const query = `SELECT * FROM pins WHERE user_id = "${user_id}" AND title LIKE "%${title}%";`
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
} //