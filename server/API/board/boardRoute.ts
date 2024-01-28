import express from "express"
import { addOneBoard, deleteBoard, getAllBoards, getOneBoard } from "./boardcont"
const router = express.Router()

router
.get("/getAllBoards", getAllBoards)
.get("/:BoardId", getOneBoard) //<-- to get a specific Board by its id
.post("/addBoard", addOneBoard)
.delete("/:BoardId", deleteBoard)

export default router