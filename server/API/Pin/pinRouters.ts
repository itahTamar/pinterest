import express from "express"
import { addPin, deletePin,updatePin, getPinById, getAllOtherUsersPins, getAllUserSavedPins } from "./pinCtrl"

const router = express.Router()


router
    .post("/:user_id", addPin)   
    .get("/:username", getAllUserSavedPins) 
    .get("/:user_id", getAllOtherUsersPins)
    .get("/:pin_id", getPinById)
    .put("/:pin_id", updatePin)  
    .delete("/:pin_id",deletePin)


export default router