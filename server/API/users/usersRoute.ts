import express from "express";
import { deleteUser, AdminGetAllUsers, getUserByCookie, login, register, updateUser } from "./usersCont";
import { isAdmin } from "./middleware/middleware";

const router = express.Router();

router.post("/register", register)
      .post("/login" ,login)
      .get("/admin", isAdmin, AdminGetAllUsers)
      .get("/getUserByCookie", getUserByCookie)
      .patch("/updateUser/:userId", updateUser)
      .delete("/delete-user/:userId", deleteUser)

export default router;