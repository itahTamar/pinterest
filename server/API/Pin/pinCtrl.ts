import express from 'express';
import connection from '../../DB/database';
import { Results } from '../interfaces/interfaces';

export async function addPin(req: express.Request, res: express.Response) {
  try {
    const { user_id } = req.params;
    if (!user_id) throw new Error("at addPin no user_id in params");
    
    const { title, image, description, link, board } = req.body;
    if (!title || !image)
      throw new Error(
        "No title or image provided in FUNCTION addPin in FILE pinCtrl.ts"
      );

    const usernameQuery = `SELECT username FROM users WHERE user_id=${user_id};`;
    connection.query(usernameQuery, (err, results1) => {
      try {
        if (err) throw err;
        const username1 = results1[0].username;
        const query = `INSERT INTO pins (title, image, description, link, username, category) VALUES ("${title}", "${image}", "${description}", "${link}", "${username1}", "${board}")`;
        connection.query(query, (err, results) => {
            try {
              if (err) throw err;
              res.send({ ok: true, results });
            } catch (error) {
              res.status(500).send({ ok: false, error });
            }
          }
        );
      } catch (error) {
        res.status(500).send({ ok: false, error });
      }
    });
  } catch (error) {
    res.status(500).send({ ok: false, error });
  }
} //work ok

export async function deletePin(req, res) {
  try {
    const { pin_id } = req.params;
    if (!pin_id) throw new Error("no Id");

    const query = `DELETE FROM pins WHERE (pin_id = ${pin_id});`;

    connection.query(query, (err, results:Results) => {
      try {
        if (err) throw err;
        if (results.affectedRows) {
          res.send({ ok: true, results });
        } else {
          res.send({ ok: true, results: "No rows were deleted" });
        }
      } catch (error) {
        console.log(error);
        res.status(500).send({ ok: false, error });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ ok: false, error });
  }
} //work ok

export async function editPin(req, res) {
    try {
        const { pin_id } = req.params;
        if (!pin_id) throw new Error("No Id provided on updatePin");
        const { title, description, link, board } = req.body;
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
              console.log(error);
              res.status(500).send({ ok: false, error });
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({ ok: false, error })
    }
} //work ok

export async function getAllUserSavedPinsByUserId(
  req: express.Request,
  res: express.Response
) {
  try {
    const { user_id } = req.params;
    if (!user_id) throw new Error("no user_id in params");

    const query = `SELECT * FROM user_favorites_pins WHERE user_id = "${user_id}";`;
    connection.query(query, (err, results) => {
      try {
        if (err) throw err;
        res.send({ ok: true, results });
      } catch (error) {
        console.log(error);
        res.status(500).send({ ok: false, error });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ ok: false, error });
  }
} //work ok

export async function getAllUserCreatedPinsByUsername(
  req: express.Request,
  res: express.Response
) {
  try {
    const { username } = req.params;
    const query = `SELECT * FROM pins WHERE username = "${username}";`;
    connection.query(query, (err, results) => {
      try {
        if (err) throw err;
        res.send({ ok: true, results }); //{"ok": true,"results": []}
      } catch (error) {
        console.log(error);
        res.status(500).send({ ok: false, error });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ ok: false, error });
  }
} //work ok

//get all other users pin by username
export async function getAllOtherUsersPinsByUsername(
  req: express.Request,
  res: express.Response
) {
  try {
    const { username } = req.params;
    if (!username)
      throw new Error("at getAllOtherUsersPins no username in params");

    const query = `SELECT * FROM pins where username != "${username}";`;
    connection.query(query, (err, results) => {
      try {
        if (err) throw err;
        res.send({ ok: true, results });
      } catch (error) {
        console.log(error);
        res.status(500).send({ ok: false, error });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ ok: false, error });
  }
} //work ok

export async function getPinById(req: express.Request, res: express.Response) {
  try {
    const { pin_id } = req.params;
    if (!pin_id) throw new Error("no pin_id");

    const query = `SELECT * FROM pins WHERE (pin_id = ${pin_id})`;
    connection.query(query, (err, results) => {
      try {
        if (err) throw err;
        res.send({ ok: true, results });
      } catch (error) {
        console.log(error);
        res.status(500).send({ ok: false, error });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ ok: false, error });
  }
} //work ok

//get the pin that the user did not create except the pin he click on
export async function getPinsByCategory(
  req: express.Request,
  res: express.Response
) {
  try {
    const category = req.params.category;
    if (!category)
      throw new Error("at getPinsByCategory no category in params");

    const username = req.query.username;
    if (!username) throw new Error("at getPinsByCategory no user id in query");

    const pin_id = req.query.pin_id
    if (!pin_id) throw new Error("at getPinsByCategory no pin_id in query");

    const query = `SELECT * FROM pins WHERE username != "${username}" AND category = "${category}" AND pin_id != ${pin_id};`;
    connection.query(query, (err, results) => {
      try {
        if (err) throw err;
        res.send({ ok: true, results });
      } catch (error) {
        console.log(error);
        res.status(500).send({ ok: false, error });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ ok: false, error });
  }
} //work ok

//get all the pins that the user didn't create by category
export async function getPinsByCategory2(
  req: express.Request,
  res: express.Response
) {
  try {
    const category = req.params.category;
    console.log(category);
    if (!category)
      throw new Error("at getPinsByCategory no category in params");

    const username = req.query.username;
    if (!username) throw new Error("at getPinsByCategory no user id in query");

    const query = `SELECT * FROM pins WHERE username != "${username}" AND category = "${category}";`;
    connection.query(query, (err, results) => {
      try {
        if (err) throw err;
        res.send({ ok: true, results });
      } catch (error) {
        console.log(error);
        res.status(500).send({ ok: false, error });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ ok: false, error });
  }
} //work ok

export async function savePinToUserByUserId(
  req: express.Request,
  res: express.Response
) {
  try {
    const { pin_id } = req.params;
    if (!pin_id || pin_id == undefined)
      throw new Error(
        "at savePinToUserByUserId no pin_id in params or it's undefine"
      );

    const user_id = req.query.user_id;
    if (!user_id)
      throw new Error("at savePinToUserByUserId no user_id in query");

    const testing = `SELECT * FROM user_favorites_pins WHERE user_favorites_pins.user_id = "${user_id}"
      AND user_favorites_pins.pin_id = "${pin_id}";`;
    connection.query(testing, (err, results1:Results) => {
        try {
            if (err) throw err;
            if(results1.length == 0){  //meaning the pin yet to be saved
                const query = `INSERT INTO user_favorites_pins (user_id, pin_id) VALUES (${user_id}, ${pin_id});`;
                connection.query(query, (err, results) => {
                try {
                    if (err) throw err;
                    res.send({ ok: true, results });
                } catch (error) {
                    res.status(500).send({ ok: false, error });
                }
                });                
            } else {
                res.send({ ok: true, massage:"pin already save in your favorites" });
            } 
        } catch (error) {
            res.status(500).send({ ok: false, error });
    }})
  } catch (error) {
    console.error(error);
  }
} //work ok

export async function findTitleAtOtherUsersPinsByUsername(
  req: express.Request,
  res: express.Response
) {
  try {
    const username = req.params.username;
    if (!username)
      throw new Error(
        "at findTitleAtOtherUsersPinsByUsername no username in params"
      );

    const { text } = req.query;
    if (!text) throw new Error("no text at req.query");
   
    const query = `SELECT * FROM pins where username != "${username}" AND title LIKE "%${text}%";`;
    connection.query(query, (err, results) => {
      try {
        if (err) throw err;
        res.send({ ok: true, results });
      } catch (error) {
        console.log(error);
        res.status(500).send({ ok: false, error });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ ok: false, error });
  }
} // work ok
