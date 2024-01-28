import connection from './DB/database';
import express from 'express';

const app = express()

const PORT = process.env.PORT || 4000

app.use(express.json())

// app.use(express.static('public'))
import categoriesRoutes from "./API/Category/categoryRouters"
app.use("/api/v1/category", categoriesRoutes)

import usersRoute from "./API/users/usersRoute"
app.use("/api/v1/users", usersRoute)

import boardRoute from "./API/board/boardRoute"
app.use("/api/v1/board", boardRoute)

import pinRouters from "./API/Pin/pinRouters"
app.use("/api/v1/pin", pinRouters)

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})