import mysql from "mysql2"

const sqlPassword = process.env.SQLPASSWORD;


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: sqlPassword,
    database: "pinterest"
})

connection.connect((err) => {
    try {
        if (err) throw err;

        console.log("mySQL server is connected!!")
    } catch (error) {
        console.error(error)
    }
})

export default connection