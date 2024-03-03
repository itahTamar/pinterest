import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PinsContext } from "../../contexts/pinsContext";
import { Pin } from "../../types/pin";
import PinCard from "./PinCard";
import "./RenderOthersPins.scss";

//

const RenderUserPageSearchPin = () => {
  const { PinsSearch } = useContext(PinsContext);

  const [filterPinsState] = useState<Pin[]>(PinsSearch);
  const navigate = useNavigate();

  return (
    <>
      <div className="pins-container">
        {filterPinsState && PinsSearch.length > 0 ? (
          filterPinsState.map((pin) => {
            return (
              <div className="pin-card-cover" key={pin.title}>
                <button
                  onClick={() => {
                    navigate(`/main/pinPage/${pin.pin_id}`);
                  }}
                >
                  <PinCard pin={pin} />
                </button>
              </div>
            );
          })
        ) : (
          <p>no pin found</p>
        )}
      </div>
    </>
  );
};

export default RenderUserPageSearchPin;
