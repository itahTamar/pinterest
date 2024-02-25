import express from "express";
import { deleteUser, AdmingetAllUsers, getUserByCookie, login, register, updateUser } from "./usersCont";
import { isAdmin } from "./middleware/middleware";

const router = express.Router();

router.post("/register", register)
      .post("/login" ,login)
      .post("/admin", isAdmin, AdmingetAllUsers)
      .get("/getUserByCookie", getUserByCookie)
      .patch("/update-user/:userId", updateUser)
      .delete("/delete-user/:userId", deleteUser)

export default router;