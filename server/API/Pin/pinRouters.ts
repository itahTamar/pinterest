import express from "express"
import { addPin, deletePin,updatePin, getPinById, getAllOtherUsersPins, getAllUserSavedPinsByUserId, getAllUserCreatedPinsByUsername, getPinsByCategory } from "./pinCtrl"

const router = express.Router()


router
    .post("/:user_id", addPin)   
    .get("/saved/:user_id", getAllUserSavedPinsByUserId) 
    .get("/others/:user_id", getAllOtherUsersPins)
    .get("/category/:category", getPinsByCategory)
    .get("/created/:username", getAllUserCreatedPinsByUsername)
    .get("/onePin/:pin_id", getPinById)
    .put("/:pin_id", updatePin)  
    .delete("/:pin_id",deletePin)


export default router