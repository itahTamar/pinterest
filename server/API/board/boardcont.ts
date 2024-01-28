import express from 'express'
import connection from '../../DB/database'
import { Results } from '../interfaces/interfaces'

export async function getAllBoards(req: express.Request, res: express.Response) {
    try {
        const query = "SELECT * FROM boards"
        connection.query(query, (err, results: Results) => {
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
        res.status(500).send({ ok: false, error })  //closer - without it the error could stack in loop
    }
} //work ok

export async function addOneBoard(req: express.Request, res: express.Response) {
    try {
        const { userId } = req.params;
        if (!userId) throw new Error("no Id")

        const query = `INSERT INTO boards (user_id) VALUES ('${userId}');`;
        connection.query(query, (err, results) => {
            try {
                if (err) throw err;
                res.send({ ok: true, results })
            } catch (error) {
                console.log(error)
                res.status(500).send({ ok: false, error })
            }
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ ok: false, error })
    }
}  // work ok

export async function getOneBoard(req: express.Request, res: express.Response) {
    const { boardId } = req.params;
    if (!boardId) throw new Error("no board id");
    try {
        const query = `SELECT * FROM boards WHERE board_id = "${boardId}";`
        connection.query(query, (err, results) => {
            try {
                if (err) throw err
                console.log("At getOneBoard the results is:", results)
                res.send({ ok: true, results })
            } catch (error) {
                console.log(error)
                res.status(500).send({ ok: false, error })
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({ ok: false, error })  //closer - without it the error could stack in loop
    }
} //work ok

export async function deleteBoard(req: express.Request, res: express.Response) {
    try {
        const { boardId } = req.params;
        if (!boardId) throw new Error("no Id")

        const query = `DELETE FROM boards WHERE (board_id = ${boardId});`;

        connection.query(query, (err, results: Results) => {
            try {
                if (err) throw err;
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
} //work ok