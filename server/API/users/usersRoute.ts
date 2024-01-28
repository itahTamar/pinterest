import express from "express";
import { register } from "./usersCont";

const router = express.Router();

router.post("/register", register)
      .post("/login", login)
      .get("/get-user", getUser)
      .delete("/delete-user", IsAdmon, deleteUser)

export default router;