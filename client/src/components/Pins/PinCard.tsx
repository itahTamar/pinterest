import { FC } from "react";
import { Pin } from "../../types/pin";
import "../../style/pinCard.css";
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
        <img className="pin-img" src={pin.image} alt={pin.title} />
      ) : (
        <p>pin undefine</p>
      )}
    </>
  );
};

export default PinCard;
