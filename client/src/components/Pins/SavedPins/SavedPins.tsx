import { faCaretDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUserSavedPinsByUserId } from "../../../api/pins/pinsApi";
import { UserContext } from "../../../contexts/userContext";
import { Pin } from "../../../types/pin";
import PinCard from "../PinCard/PinCard";
import "./savedPins.scss";

//work ok
const SavedPins = () => {
  const [pinsState, setPins] = useState<Pin[]>([]);
  const [filterPinsState, setFilterPins] = useState<Pin[]>([]);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleGetAllUserSavedPins = async () => {
    try {
      if (!user.userId)
        throw new Error(
          "at handleGetAllUserSavedPins there is no userId in params"
        );

      //use axios to get the Pin list by userId from DB
      const response = await getAllUserSavedPinsByUserId(user.userId); //get pin_id list of favorite user's pins
      if (!response)
        throw new Error(
          "No response from axios getAllUserSavedPinsByUserId at SavedPins"
        );
      console.log(
        "At SavedPins/getAllUserSavedPinsByUserId the response is:",
        response
      ); //got it

      //put the list in PinsState and filterPinsState
      const PinList = response;
      console.log("PinList:", PinList);
      setPins(PinList);
      setFilterPins(PinList);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (user) {
      handleGetAllUserSavedPins();
    }
  }, [user]); 

  useEffect(() => {
    console.log("PinsState lime 41:", pinsState);
  }, [pinsState]);

  useEffect(() => {
    console.log("filterPinsState:", filterPinsState);
  }, [filterPinsState]);

  return (
    <div id="renderSaved" className="renderSaved">
      <div className="navbar3">
        <div>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
        <div>
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>

      <div className="boards"></div>

      <div className="user-saved-pins"></div>
      {/* render all user's saved pins (the one he likes) */}
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
    </div>
  );
};

export default SavedPins;
