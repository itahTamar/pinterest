import express from "express"
import { addPin, deletePin,updatePin, getPinById, getAllOtherUsersPins, getAllUserSavedPinsByUserId, getAllUserCreatedPinsByUsername } from "./pinCtrl"

const router = express.Router()


router
    .post("/:user_id", addPin)   
    .get("/saved/:user_id", getAllUserSavedPinsByUserId) 
    .get("/:user_id", getAllOtherUsersPins)
    .get("/:username", getAllUserCreatedPinsByUsername)
    .get("/:pin_id", getPinById)
    .put("/:pin_id", updatePin)  
    .delete("/:pin_id",deletePin)


export default router