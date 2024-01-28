import express from "express"
import { addPin, deletePin,updatePin,getAllPins,findPinByName } from "./pinCtrl"

const router = express.Router()


router
    .post("", addPin)
    .delete("/:pin_id",deletePin)
    .put("/:pin_id", updatePin) 
    .get("", getAllPins) //ALL
    .get("/filter", findPinByName) 


export default router