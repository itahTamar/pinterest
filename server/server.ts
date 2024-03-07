import express from 'express';
import cookieParser from 'cookie-parser';

require('dotenv').config();

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json());
app.use(cookieParser());
import connection from './DB/database';

import usersRoute from "./API/users/usersRoute"
app.use("/api/v1/users", usersRoute)

import boardRoute from "./API/board/boardRoute"
app.use("/api/v1/board", boardRoute)

import pinRouters from "./API/Pin/pinRouters"
app.use("/api/v1/pin", pinRouters)

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})