import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pin } from "../../../types/pin";
import PinCard from "../PinCard/PinCard";
import { OtherPinsContext } from "../../../contexts/pinsContext";

//

const RenderOtherSearchPin = () => {
  const { searchedPins } = useContext(OtherPinsContext);
  const [filterPinsState] = useState<Pin[]>(searchedPins);
  const navigate = useNavigate();

  return (
    <>
      <div className="pins-container">
        {filterPinsState && searchedPins.length > 0 ? (
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

export default RenderOtherSearchPin;
