import express from "express"
import { addPin, deletePin,updatePin, getPinById, getAllUserSavedPinsByUserId, getAllUserCreatedPinsByUsername, findTitleAtOtherUsersPins, findTitleAtUserSavedPinsByUserId, savePinToUserByUserId, getAllOtherUsersPinsByUsername, getPinsByCategory } from "./pinCtrl"

const router = express.Router()


router
    .post("/:user_id", addPin)
    .post("/favorite/:pin_id", savePinToUserByUserId)   
    .get("/saved/:user_id", getAllUserSavedPinsByUserId) 
    .get("/others/:username", getAllOtherUsersPinsByUsername)
    .get("/category/:category", getPinsByCategory)
    .get("/created/:username", getAllUserCreatedPinsByUsername)
    .get("/onePin/:pin_id", getPinById)
    .get("/findOther/:user_id", findTitleAtOtherUsersPins)
    .get("/findSaved/:user_id", findTitleAtUserSavedPinsByUserId)
    .put("/:pin_id", updatePin)  
    .delete("/:pin_id",deletePin)
    
export default router