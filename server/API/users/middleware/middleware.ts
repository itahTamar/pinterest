const {SECRET} = process.env;
const secret = SECRET;

const jwt = require('jwt-simple');

export function isAdmin(req, res, next) {
    try {
        //take from cookie and decode cookie and check for admin role
        const token = req.cookies.user;       
        if(!token) {
            console.error("no token");
            return res.send({ok: false, error: "timeout, please log-in again" })
        }
        const cookie = jwt.decode(token, secret);
        //decoded cookie
        const {role} = cookie;
        req.role = role;
        if(role !== "admin") throw new Error("no admin");
        next();
    } catch (error) {
        return res.status(401).send({ok: false, error: error.message });
    }
}