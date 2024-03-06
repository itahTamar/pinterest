import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUserCreatedPinsByUsername } from "../../../api/pins/pinsApi";
import { OtherPinsContext,
  //  SavedPinsContext 
  } from "../../../contexts/pinsContext";
import { UserContext } from "../../../contexts/userContext";
import { Pin } from "../../../types/pin";
import PinCard from "../PinCard/PinCard";

//work ok
const CreatedPins = () => {
  const [pinsState, setPins] = useState<Pin[]>([]);
  const [filterPinsState, setFilterPins] = useState<Pin[]>([]);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { searchedPins } = useContext(OtherPinsContext);
  // const { savedSearch } = useContext(SavedPinsContext);

  const handleGetAllUserCreatedPinsByUsername = async () => {
    try {
      if (!user.username)
        throw new Error(
          "at handleGetAllUserSavedPins there is no userId in params"
        );

      //use axios to get the Pin list by userId from DB
      const response = await getAllUserCreatedPinsByUsername(user.username);
      if (!response)
        throw new Error(
          "No response from axios getAllUserCreatedPinsByUsername at CreatedPins"
        );
      console.log(
        "At CreatedPins/getAllUserCreatedPinsByUsername the response is:",
        response
      ); //got it

      // if (savedSearch.length > 0) {
      //   setPins(savedSearch);
      //   setFilterPins(savedSearch);
      // } else {
        if (searchedPins.length > 0) {
          setPins(searchedPins);
          setFilterPins(searchedPins); //?why i need that too?
        } else {
          //put the list in PinsState and filterPinsState
          setPins(response);
          setFilterPins(response);
        }
      // }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if(user){
      handleGetAllUserCreatedPinsByUsername();
    }
  }, [user]); //only run this effect on the initial render

  return (
    <div id="renderCreated" className="renderCreated">
      <div className="navbar3">
      </div>

      <div className="user-created-pins">
        {/* render all user created pins */}
        <div className="pins-container">
          {filterPinsState && pinsState.length > 0 ? (
            filterPinsState.map((pin) => {
              return (
                <div className="pin-card-cover" key={pin.title}>
                  <div
                    onClick={() => {
                      navigate(`/main/PageOfCreatedPin/${pin.pin_id}`);
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
    </div>
  );
};

export default CreatedPins;
