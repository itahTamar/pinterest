import bcrypt from "bcrypt";
import connection from "../../DB/database";
import jwt from "jwt-simple";
import { Results } from "../interfaces/interfaces";
import { Request, Response } from "express";
import { decode } from "punycode";

const saltRounds = 10;

export async function register(req: Request, res: Response) {
  console.log("10");
  try {
    console.log("12");

    const {
      email,
      password,
      username,
      first_name,
      last_name,
      about,
      pronouns,
      website,
    } = req.body;
    if (!email || !password || !first_name || !last_name || !username)
      throw new Error(
        "Necessary information is missing at register user server"
      );
    console.log("16");

    const secret = process.env.SECRET;
    if (!secret) throw new Error("no secret");
    console.log("20");

    const hash = await bcrypt.hash(password, saltRounds);
    console.log("23");

    const query = `INSERT INTO users ( email, password, username, first_name, last_name, about, pronouns, website) VALUES ('${email}', '${hash}','${username}','${first_name}','${last_name}','${about}','${pronouns}','${website}');`;

    connection.query(query, (err, resultsAdd: Results) => {
      try {
        if (err) throw err;
        if (resultsAdd.affectedRows) {
          const queryUser = `SELECT * FROM users WHERE user_id = ${resultsAdd.insertId}`;
          connection.query(queryUser, (err2, results) => {
            if (err2) throw err2;
            const resultUserId = results[0].user_id;
            res.send({ ok: true, resultUserId });
          });
        }
      } catch (error) {
        res.status(500).send({ ok: false, error: "at register 2nd try-catch" });
      }
    });
  } catch (error) {
    res.status(500).send({ ok: false, error: "at register 1st try-catch" });
  }
} // work ok

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("no data at login user");

    const query = `SELECT * FROM users WHERE email = "${email}"`;
    if (!query) throw new Error("at login, No query provided for user login");

    connection.query(query, async (err, results: Results) => {
      const secret = process.env.SECRET;
      if (!secret) throw new Error("no secret at .env");
      try {
        if (err) throw err;
        if (results.length > 0) {
          const hash = results[0].password;
          const match: boolean = await bcrypt.compare(password, hash);
          if (!match) throw new Error("at login password incorrect!");

          const userData = {
            username: results[0].username,
            firstName: results[0].first_name,
            lastName: results[0].last_name,
            userId: results[0].user_id,
            image: results[0].photo,
            about: results[0].about,
            pronouns: results[0].pronouns,
            website: results[0].website,
          };

          const cookie = {
            uid: results[0].user_id,
            role: results[0].role,
          };
          const token = jwt.encode(cookie, secret);

          res.cookie("user", token, { httpOnly: true, maxAge: 1000 * 60 * 60 });
          res.send({ ok: true, message: "user login!", userData });
        } else {
          throw new Error("user not found");
        }
      } catch (error) {
        res.status(500).send({ ok: false, error });
      }
    });
  } catch (error) {
    res.status(500).send({ ok: false, error });
  }
} //work ok

export async function updateUser(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    if (!userId) throw new Error("No Id provided on updateUser");

    const { image, firstName, lastName, about, pronouns, website, username } =
      req.body;
    const query = `UPDATE users SET photo = "${image}", first_name = '${firstName}', last_name = '${lastName}',about = '${about}',pronouns = '${pronouns}', website = '${website}', username = '${username}'  WHERE (user_id = ${userId});`;

    connection.query(query, (err, results: Results) => {
      try {
        if (err) throw err;
        if (results.changedRows) {
          const queryUpdateUser = `SELECT * from users WHERE (user_id = ${userId});`;
          connection.query(queryUpdateUser, (err2, results2) => {
            try {
              if (err2) throw err2;
              const userData = {
                username: results2[0].username,
                firstName: results2[0].first_name,
                lastName: results2[0].last_name,
                userId: results2[0].user_id,
                image: results2[0].photo,
                about: results2[0].about,
                pronouns: results2[0].pronouns,
                website: results2[0].website,
              };
              res.send({ ok: true, userData });
            } catch (error) {
              console.log(error);
              res.status(500).send({ ok: false, error });
            }
          });
        } else {
          res.send({ ok: true, results: "no changes found" });
        }
      } catch (error) {
        console.log(error);
        res.status(500).send({ ok: false, error: "at register 2nd try-catch" });
      }
    });
  } catch (error) {
    res.status(500).send({ ok: false, error: "at register 1st try-catch" });
  }
} //work ok

export async function deleteUser(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    if (!userId) throw new Error("no Id");

    const query = `DELETE FROM users WHERE (user_id = ${userId});`;

    connection.query(query, (err, results: Results) => {
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

export async function getUserByCookie(req: Request, res: Response) {
  try {
    const { user } = req.cookies;
    if (!user) throw new Error("no user at cookie");

    const secret = process.env.SECRET;
    if (!secret) throw new Error("no secret");

    const decodedId = jwt.decode(user, secret);
    if (!decodedId) throw new Error("Failed to decode user ID");

    const { uid } = decodedId;
    const query = `SELECT * FROM users WHERE user_id = ${uid}`;

    connection.query(query, (err, results) => {
      try {
        if (err) throw err;
        const resultToSend = {
          username: results[0].username,
          firstName: results[0].first_name,
          lastName: results[0].last_name,
          userId: results[0].user_id,
          image: results[0].photo,
          about: results[0].about,
          pronouns: results[0].pronouns,
          website: results[0].website,
        };

        res.send({ ok: true, results: resultToSend });
      } catch (error) {
        res.status(500).send({ ok: false, error });
      }
    });
  } catch (error) {
    res.status(500).send({ ok: false, error });
  }
} //work ok

export async function AdminGetAllUsers(req: Request, res: Response) {
  try {
    const query = `SELECT * FROM users`;

    connection.query(query, (err, results) => {
      try {
        if (err) throw err;
        res.send({ ok: true, results: results });
      } catch (error) {
        res.status(500).send({ ok: false, error });
      }
    });
  } catch (error) {
    res.status(500).send({ ok: false, error });
  }
} //work ok
