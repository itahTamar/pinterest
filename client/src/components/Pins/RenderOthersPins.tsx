import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllOtherUsersPinsByUsername } from "../../api/pins/pinsApi";
import { UserContext } from "../../contexts/userContext";
import { Pin } from "../../types/pin";
import { NavbarPin } from "../navbars/NavbarPin/NavbarPin";
import SpecificPin from "./SpecificPin";
import PinCard from "./PinCard";
import "./RenderOthersPins.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faUpload } from "@fortawesome/free-solid-svg-icons";

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
              <div>
                
                <div className="pin-card-cover" key={pin.title}>
                <div>
                  <button>board</button>
                  <button>save</button>
                </div>
                  {/* <NavbarPin pin_id={pin.pin_id} /> */}
                  <button
                    onClick={() => {
                      navigate(`/main/pinPage/${pin.pin_id}`);
                    }}
                  >
                    <PinCard pin={pin} />
                  </button>
                  <div>
                  <button><FontAwesomeIcon icon={faUpload} /></button>
                  <button><FontAwesomeIcon icon={faEllipsis} /></button>
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
