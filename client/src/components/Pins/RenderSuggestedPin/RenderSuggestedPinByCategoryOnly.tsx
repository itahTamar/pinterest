import { FC, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pin } from "../../../types/pin";
import { getPinsByCategory2, getPinsByCategory3 } from "../../../api/pins/pinsApi";
import PinCard from "../PinCard/PinCard";
import { UserContext } from "../../../contexts/userContext";

//work ok
interface PinProp {
  category: string;
}
//for the pin-page
const RenderSuggestedPinByCategoryOnly: FC<PinProp> = ({ category }) => {
  const [pinsState, setPins] = useState<Pin[]>([]);
  const [filterPinsState, setFilterPins] = useState<Pin[]>([]);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleGetPinsByCategoryOnly = async () => {
    try {
      if (!category)
        throw new Error(
          "at handleGetPinsByCategory there is no category in props"
        );
    
      //use axios to get the Pin list by userId from DB
      const response = await getPinsByCategory3(category, user.username);
      if (!response)
        throw new Error(
          "No response from axios getPinsByCategory at render suggested pins"
        );
      console.log("At getPinsByCategory the response is:", response);

      //put the list in PinsState and filterPinsState
      setPins(response);
      setFilterPins(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (user) {
      handleGetPinsByCategoryOnly();
    }
  }, [user]); 

  useEffect(() => {
    console.log("PinsState:", pinsState); //got it
  }, [pinsState]);

  useEffect(() => {
    console.log("filterPinsState:", filterPinsState); //got it
  }, [filterPinsState]);

  return (
    <>
      <div className="pins-container">
        {filterPinsState && pinsState.length > 0 ? (
          filterPinsState.map((pin) => {
            return (
              <div className="pin-card-cover" key={pin.title}>
                <div
                  onClick={() => {
                    navigate(`/main/pinPage/${pin.pin_id}`);
                  }}
                >
                  <PinCard pin={pin} />
                </div>
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

export default RenderSuggestedPinByCategoryOnly;
