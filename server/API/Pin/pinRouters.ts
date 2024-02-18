import express from "express"
import { addPin, deletePin,updatePin, getPinById, getAllOtherUsersPinsByUsername, getAllUserSavedPinsByUserId, getAllUserCreatedPinsByUsername, getPinsByCategory, savePinToUserByUserId } from "./pinCtrl"

const router = express.Router()


router
    .post("/:user_id", addPin)
    .post("/favorite/:pin_id", savePinToUserByUserId)   
    .get("/saved/:user_id", getAllUserSavedPinsByUserId) 
    .get("/others/:user_id", getAllOtherUsersPinsByUsername)
    .get("/category/:category", getPinsByCategory)
    .get("/created/:username", getAllUserCreatedPinsByUsername)
    .get("/onePin/:pin_id", getPinById)
    .put("/:pin_id", updatePin)  
    .delete("/:pin_id",deletePin)


export default router