import express from "express"
import { 
    getAllOtherUsersBoardsById,
    // addOneBoard, deleteBoard, 
    getAllUsersBoards, getOneBoard } from "./boardcont"
const router = express.Router()

router
.get("/getAllUsersBoards/:userId", getAllUsersBoards)
.get("/getAllOtherUsersBoards/:userId", getAllOtherUsersBoardsById)
.get("/getOneBoard/:boardId", getOneBoard) //<-- to get a specific Board by its id

// .post("/:userId", addOneBoard)
// .delete("/:boardId", deleteBoard)

export default router