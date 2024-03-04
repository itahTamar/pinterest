import express from "express"
import { addPin, deletePin, getPinById, getAllOtherUsersPinsByUsername, getAllUserSavedPinsByUserId, getAllUserCreatedPinsByUsername, getPinsByCategory, savePinToUserByUserId, editPin } from "./pinCtrl"

const router = express.Router();

router
    .post("/:user_id", addPin)
    .post("/favorite/:pin_id", savePinToUserByUserId)   
    .get("/saved/:user_id", getAllUserSavedPinsByUserId) 
    .get("/others/:username", getAllOtherUsersPinsByUsername)
    .get("/category/:category", getPinsByCategory)
    .get("/created/:username", getAllUserCreatedPinsByUsername)
    .get("/onePin/:pin_id", getPinById)
    .patch("/:pin_id", editPin)  
    .delete("/:pin_id",deletePin)

export default router;