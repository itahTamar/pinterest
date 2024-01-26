import express from "express"
import { addCategory, deleteCategory } from "./categoeyCtrl"

const router = express.Router()



router
    .post("", addCategory)
    .delete("/:category_id",deleteCategory)


export default router