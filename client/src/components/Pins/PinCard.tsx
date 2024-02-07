import { FC } from "react";
import { Pin } from "../../types/pin";

interface PinCardProps {
    pin: Pin | undefined;
}

const PinCard : FC<PinCardProps> = ({ pin }) =>  {
  return (
    <>
    {pin != undefined ?
        <div className="pin-card">
            <img className="pin-img" src={pin.image} alt={pin.title} />
            <div className="pin-info">
                <h3>{pin.title}</h3>
                <p>{pin.description}</p>
            </div>
        </div>
        :
        <p>pin undefine</p>
    }
</>
  )
}

export default PinCard
