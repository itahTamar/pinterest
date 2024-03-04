import { FC } from "react";
import { Pin } from "../../types/pin";
import "../../style/pinCard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faUpload } from "@fortawesome/free-solid-svg-icons";

//rendering big-page-view with all the details and without the btn
interface PinCardProps {
    pin: Pin;
}
const SpecificPin: FC<PinCardProps> = ({ pin }) => {
    if (pin == undefined) throw new Error("pin is undefined at pinCard");
    console.log("pin:", pin)
    console.log("pin.pin_id:", pin.pin_id)
    console.log("pin.description:", pin.description)

    return (
        <>
            {pin != undefined ?
                <div className="specific-pin-card">
                    <img className="specific-pin-img" src={pin.image} alt={pin.title} />
                    <div className="specific-pin-info"> {/*style: in the right from the img and above the chatbox */}
                        <div>
                            <h3>{pin.title}</h3>
                            <p>{pin.description}</p>
                        </div>
                    </div>
                </div>
                :
                <p>pin undefine</p>
            }
        </>
    )
}

export default SpecificPin
