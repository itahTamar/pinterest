import express from "express"
import { 
    getAllOtherUsersBoardsById,
    getAllUsersBoards, getOneBoard } from "./boardcont"
const router = express.Router()

router
.get("/getAllUsersBoards/:userId", getAllUsersBoards)
.get("/getAllOtherUsersBoards/:userId", getAllOtherUsersBoardsById)
.get("/getOneBoard/:boardId", getOneBoard) //<-- to get a specific Board by its id

export default router