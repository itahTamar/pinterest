import { FC } from "react";
import { Pin } from "../../types/pin";
import "./PinCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faUpload } from "@fortawesome/free-solid-svg-icons";

interface PinCardProps {
  pin: Pin;
}

const PinCard: FC<PinCardProps> = ({ pin }) => {
  if (pin == undefined) throw new Error("pin is undefined at pinCard");
  console.log("pin:", pin);
  console.log("pin.pin_id:", pin.pin_id);
  return (
    <>
      {pin != undefined ? (
        <div className="container">
          <div className="imgs">
            <img src={pin.image} alt={pin.title} />
          </div>
        </div>
      ) : (
        <p>pin undefine</p>
      )}
    </>
  );
};

export default PinCard;
