import { FC } from "react";
import { Pin } from "../../../types/pin";
import "./SpecificPin.scss";

//rendering big-page-view with only the img without the other pin-data
interface PinCardProps {
    pin: Pin;
}
const SpecificPin: FC<PinCardProps> = ({ pin }) => {
    if (pin === undefined) throw new Error("pin is undefined at SpecificPin");
    return (
        <>
            {pin != undefined ?
                <div className="specific-pin-card">
                    <img className="specific-pin-img" src={pin.image} alt={pin.title} />
                </div>
                :
                <p>pin undefine</p>
            }
        </>
    )
}

export default SpecificPin
