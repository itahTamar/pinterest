import express from 'express';
import connection from '../../DB/database';



export async function addPin(req: express.Request, res: express.Response) {
    try {

        const { title, image, discription, link } = req.body
        if (!title || !image || !discription || !link) throw new Error("no data in FUNCTION addPin in FILE pinCtrl.ts")

        const query = `INSERT INTO pins (image, title, discription, link) VALUES ("${title}", "${image}", "${discription}", "${link}");`;
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


export async function deletePin(req, res) {
    try {
        const {pin_id} = req.params;
        if (!pin_id) throw new Error("no Id")

        const query = `DELETE FROM pins WHERE (pin_id = ${pin_id});`;
    
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



export async function getAllPins(req: express.Request, res: express.Response) {
    try {
        const query = "SELECT * FROM pins"
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
}

export async function findPinByName(req, res) {
    try {
        const {title} = req.query;
        if (!title) throw new Error("no title");

        const query = `SELECT * FROM pins WHERE title LIKE "${title}%"`

        connection.query(query, (err, results) => {
            try {
                if (err) throw err
                res.send({ok: true, results})
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

