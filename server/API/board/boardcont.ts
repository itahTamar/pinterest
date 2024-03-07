import express from 'express'
import connection from '../../DB/database'
import { Results } from '../interfaces/interfaces'

//get the user board by userId
export async function getAllUsersBoards(req: express.Request, res: express.Response) {
    try {
        const { userId } = req.params;
        if (!userId) throw new Error("no Id")
        
        const query = `SELECT * FROM boards WHERE user_id = ${userId}`
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

//get the other users boards by userId
export async function getAllOtherUsersBoardsById(req: express.Request, res: express.Response) {
    try {
        const { userId } = req.params;
        if (!userId) throw new Error("no Id")
        
        const query = `SELECT * FROM boards WHERE user_id != ${userId}`
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
}

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