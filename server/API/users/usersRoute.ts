import express from "express";
import { deleteUser, login, register, updateUser } from "./usersCont";

const router = express.Router();

router.post("/register", register)
      .post("/login", login)
      .patch("/update-user", updateUser)
      .delete("/delete-user", deleteUser)

export default router;