import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { OtherPinsContext } from "../../contexts/pinsContext";
import { Pin } from "../../types/pin";
import PinCard from "./PinCard";
import "./RenderOthersPins.scss";

//

const RenderOtherSearchPin = () => {
  const { otherPinsSearch } = useContext(OtherPinsContext);
  const [filterPinsState] = useState<Pin[]>(otherPinsSearch);
  const navigate = useNavigate();

  return (
    <>
      <div className="pins-container">
        {filterPinsState && otherPinsSearch.length > 0 ? (
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
