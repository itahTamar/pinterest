import express from "express"
import { addPin, deletePin, getPinById, getAllOtherUsersPinsByUsername, getAllUserSavedPinsByUserId, getAllUserCreatedPinsByUsername, getPinsByCategory, savePinToUserByUserId, editPin, findTitleAtOtherUsersPinsByUsername, getPinsByCategory2 } from "./pinCtrl"

const router = express.Router();

router
    .post("/:user_id", addPin)
    .post("/favorite/:pin_id", savePinToUserByUserId)   
    .get("/saved/:user_id", getAllUserSavedPinsByUserId) 
    .get("/others/:username", getAllOtherUsersPinsByUsername)
    .get("/findOther/:username", findTitleAtOtherUsersPinsByUsername)
    .get("/category/:category", getPinsByCategory)
    .get("/category2/:category", getPinsByCategory2)
    .get("/created/:username", getAllUserCreatedPinsByUsername)
    .get("/onePin/:pin_id", getPinById)
    .patch("/:pin_id", editPin)  
    .delete("/:pin_id",deletePin)

export default router;