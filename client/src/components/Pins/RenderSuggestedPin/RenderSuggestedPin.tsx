import { FC, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pin } from "../../../types/pin";
import { getPinsByCategory, savePinToUserByUserId } from "../../../api/pins/pinsApi";
import PinCard from "../PinCard/PinCard";
import { UserContext } from "../../../contexts/userContext";

//work ok
interface PinProp {
  category: string;
  pin_id: string | undefined
}
//for the pin-page
const RenderSuggestedPin: FC<PinProp> = ({ category, pin_id }) => {
  const [pinsState, setPins] = useState<Pin[]>([]);
  const [filterPinsState, setFilterPins] = useState<Pin[]>([]);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleGetPinsByCategory = async (pin_id:string | undefined) => {
    try {
      if (!category)
        throw new Error(
          "at handleGetPinsByCategory there is no category in props"
        );
      if (pin_id === undefined) throw new Error("at handleGetPinsByCategory pin_id undefined");
    
      //use axios to get the Pin list by userId from DB
      const response = await getPinsByCategory(category, user.username, pin_id);
      if (!response)
        throw new Error(
          "No response from axios getPinsByCategory at render suggested pins"
        );

      //put the list in PinsState and filterPinsState
      setPins(response);
      setFilterPins(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (user) {
      handleGetPinsByCategory(pin_id);
    }
  }, [user]); 

  const SaveToFavorites = async (pin_id:number) => {
    try {
      if (!user) throw new Error("no user in context");
      if(!pin_id) throw new Error("no pin_id at RenderOthersPins->handleSaveToUser");
      const response = await savePinToUserByUserId(pin_id, user.userId)
      if (!response) throw new Error("No response from axios savePinToUserByUserId at NavbarPin");
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className="pins-container">
        {filterPinsState && pinsState.length > 0 ? (
          filterPinsState.map((pin) => {
            return (
              <div className="pin-card-cover" key={pin.title}>
                   <div className="btnTop">
                  <div>
                    <label>
                      {pin.category}
                    </label>
                  </div>
                  <div>
                    <button className="save" onClick={()=> SaveToFavorites(pin.pin_id)}>save</button>
                  </div>
                </div>
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

export default RenderSuggestedPin;
