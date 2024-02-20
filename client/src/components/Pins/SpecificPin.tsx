import { FC } from "react";
import { Pin } from "../../types/pin";
import "../../style/pinCard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faUpload } from "@fortawesome/free-solid-svg-icons";

//rendering big-page-view with all the details and without the btn

interface PinCardProps {
    pin: Pin | undefined;
}
const SpecificPin: FC<PinCardProps> = ({ pin }) => {
  if (pin == undefined) throw new Error("pin is undefined at pinCard");
  console.log("pin:", pin)
  console.log("pin.pin_id:", pin.pin_id)
  return (
      <>
          {pin != undefined ?
              <div className="specific-pin-card">
                  <img className="specific-pin-img" src={pin.image} alt={pin.title} />
                  <div className="specific-pin-info">
                      {Array.isArray(pin) && pin.length > 0 && (
                          <div>
                              <h3>{pin[0].title}</h3>
                              <p>{pin[0].description}</p>
                          </div>
                      )}
                  </div>
                  <div>
                      <FontAwesomeIcon icon={faEllipsis} />
                      <FontAwesomeIcon icon={faUpload} />
                  </div>
              </div>
              :
              <p>pin undefine</p>
          }
      </>
  )
}

export default SpecificPin
