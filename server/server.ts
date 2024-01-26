import connection from './DB/database';
import express from 'express';

const app = express()

const PORT = process.env.PORT || 4000

app.use(express.json())

// app.use(express.static('public'))
import categoriesRoutes from "./API/Category/routers"
app.use("/api/v1/category", categoriesRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})