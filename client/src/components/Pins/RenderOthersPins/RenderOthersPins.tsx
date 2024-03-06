import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllOtherUsersPinsByUsername, savePinToUserByUserId } from "../../../api/pins/pinsApi";
import { UserContext } from "../../../contexts/userContext";
import { Pin } from "../../../types/pin";
import PinCard from "../PinCard/PinCard";
import "./RenderOthersPins.scss";

//work ok

const RenderOthersPins = () => {
  const [pinsState, setPins] = useState<Pin[]>([]);
  const [filterPinsState, setFilterPins] = useState<Pin[]>([]);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
 
  const handleGetAllOtherUsersPins = async () => {
    try {
      if (!user.userId)
        throw new Error(
          "at handleGetAllUserSavedPins there is no userId in context"
        );

      //use axios to get the Pin list by userId from DB
      const response = await getAllOtherUsersPinsByUsername(user.username);
      if (!response)
        throw new Error(
          "No response from axios getAllOtherUsersPinsByUsername at HomePage"
        );
      console.log(
        "At getAllOtherUsersPinsByUsername the response is:",
        response
      ); //got it

      //put the list in PinsState and filterPinsState
      setPins(response);
      setFilterPins(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (user) {
      handleGetAllOtherUsersPins();
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
                  className="img-container"
                  onClick={() => {
                    navigate(`/main/pinPage/${pin.pin_id}`);
                  }}
                >
                  <div className="img">
                    <PinCard pin={pin} />
                  </div>
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

export default RenderOthersPins;
