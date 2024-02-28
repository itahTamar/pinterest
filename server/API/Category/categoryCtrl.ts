import express from 'express';
import connection from '../../DB/database';

export async function addCategory(req: express.Request, res: express.Response) {
    try {

        const { title } = req.body
        if (!title) throw new Error("no data in FUNCTION addCategory in FILE Ctrl.ts")

        const query = `INSERT INTO categories IF NOT EXISTS (title) VALUES ("${title}");`;
        
        connection.query(query, (err, results) => {
            try {
                if (err) throw err;
                res.send({ ok: true, results })
            } catch (error) {
                res.status(500).send({ ok: false, error })
            }
        })
    } catch (error) {
        res.status(500).send({ ok: false, error })
    }
}

export async function deleteCategory(req, res) {
    try {
        const {category_id} = req.params;
        if (!category_id) throw new Error("no Id")

        const query = `DELETE FROM categories WHERE (category_id = ${category_id});`;

        connection.query(query, (err, results) => {
            try {
                if (err) throw err;
                //@ts-ignore
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
