import express from "express"
import { addCategory, deleteCategory } from "./categoryCtrl"
import { isAdmin } from "../users/middleware/middleware"

const router = express.Router()



router
    .post("", isAdmin, addCategory)
    .delete("/:category_id", isAdmin, deleteCategory)


export default router