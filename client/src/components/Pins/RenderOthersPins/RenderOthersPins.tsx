import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllOtherUsersPinsByUsername } from "../../../api/pins/pinsApi";
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
    handleGetAllOtherUsersPins();
  }, [user]); //only run this effect on the initial render

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
                <div className="btnTop">
                  <div>
                    {/* <label>
                      board <FontAwesomeIcon icon={faCaretDown} />
                    </label> */}
                  </div>
                  <div>
                    <button className="save">save</button>
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
