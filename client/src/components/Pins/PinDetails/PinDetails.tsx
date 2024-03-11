import { FC } from "react";
import { Pin } from "../../../types/pin";
import './PinDetails.scss'

//work ok
interface PinCardProps {
  pin: Pin | null;
}

const PinDetails: FC<PinCardProps> = ({ pin }) => {
  if (pin === undefined) throw new Error("pin is undefined at PinDetails");
  return (
    <>
      {pin != undefined ? (
        <div className="container">
          <div >
            <div><p className="pTitle">{pin.title}</p></div>
            <div><p className="pDescription">{pin.description}</p></div>
          </div>
        </div>
      ) : (
        <p>pin undefine</p>
      )}
    </>
  );
};

export default PinDetails;
