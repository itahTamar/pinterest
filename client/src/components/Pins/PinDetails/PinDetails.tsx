import { FC } from "react";
import { Pin } from "../../../types/pin";

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
          <div className="">
            <p>{pin.title}</p>
            <p>{pin.description}</p>
          </div>
        </div>
      ) : (
        <p>pin undefine</p>
      )}
    </>
  );
};

export default PinDetails;
