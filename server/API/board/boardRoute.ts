import express from "express"
import { addOneBoard, deleteBoard, getAllBoards, getOneBoard } from "./boardcont"
const router = express.Router()

router
.get("/getAllBoards", getAllBoards)
.get("/getOneBoard/:boardId", getOneBoard) //<-- to get a specific Board by its id
.post("/addBoard/:userId", addOneBoard)
.delete("/:boardId", deleteBoard)

export default router