import express from "express"
import { addCategory, deleteCategory } from "./categoryCtrl"

const router = express.Router()



router
    .post("", addCategory)
    .delete("/:category_id",deleteCategory)


export default router