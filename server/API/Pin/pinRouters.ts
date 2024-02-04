import express from "express"
import { addPin, deletePin,updatePin,getAllPins,getPinById, getAllOtherUsersPins } from "./pinCtrl"

const router = express.Router()


router
    .post("/:user_id", addPin)   
    .get("", getAllPins) //ALL
    .get("/:user_id", getAllOtherUsersPins)
    .get("/:pin_id", getPinById)
    .put("/:pin_id", updatePin)  
    .delete("/:pin_id",deletePin)


export default router