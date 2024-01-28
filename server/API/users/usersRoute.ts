import express from "express";
import { deleteUser, login, register, updateUser } from "./usersCont";
import { isAdmin } from "./middleware/middleware";

const router = express.Router();

router.post("/register", register)
      .post("/login", login)
      .patch("/update-user", updateUser)
      .delete("/delete-user", isAdmin, deleteUser)

export default router;