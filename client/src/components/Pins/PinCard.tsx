import { FC } from "react";
import { Pin } from "../../types/pin";
import "../../style/pinCard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faUpload } from "@fortawesome/free-solid-svg-icons";
import './PinCard.scss'

interface PinCardProps {
    pin: Pin | undefined;
}

const PinCard: FC<PinCardProps> = ({ pin }) => {
    return (
        <>
            {pin != undefined ?
                <div className="pin-card">
                    
                    <div>
                        <button>boards^</button> {/* boards enum */}
                        <button>save</button>
                    </div>
                    <img className="pin-img" src={pin.image} alt={pin.title} />
                    <div className="pin-info">
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

export default PinCard
