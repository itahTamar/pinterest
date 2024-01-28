import express from "express";
import { deleteUser, login, register, updateUser } from "./usersCont";

const router = express.Router();

router.post("/register", register)
      .post("/login", login)
      .patch("/update-user/:userId", updateUser)
      .delete("/delete-user/:userId", deleteUser)

export default router;