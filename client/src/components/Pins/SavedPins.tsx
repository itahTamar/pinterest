
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllUserSavedPinsByUserId } from '../../api/pins/pinsApi'
import { UserContext } from '../../contexts/userContext'
import { Pin } from '../../types/pin'
import SpecificPin from './SpecificPin'

import { useContext, useEffect, useState } from "react";
import { getAllUserSavedPinsByUserId } from "../../api/pins/pinsApi";
import { useNavigate } from "react-router-dom";
import { Pin } from "../../types/pin";
import PinCard from "./PinCard";
import { UserContext } from "../../contexts/userContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./savedPins.scss";


//work ok
const SavedPins = () => {
  const [pinsState, setPins] = useState<Pin[]>([]);
  const [filterPinsState, setFilterPins] = useState<Pin[]>([]);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleGetAllUserSavedPins = async () => {
    try {

      if (!user.userId) throw new Error("at handleGetAllUserSavedPins there is no userId in params");

      //use axios to get the Pin list by userId from DB
      const response = await getAllUserSavedPinsByUserId(user.userId)  //get pin_id list of favorite user's pins
      if (!response) throw new Error("No response from axios getAllUserSavedPinsByUserId at SavedPins");
      console.log("At SavedPins/getAllUserSavedPinsByUserId the response is:", response) //got it

      if (!user.userId)
        throw new Error(
          "at handleGetAllUserSavedPins there is no userId in params"
        );

      //use axios to get the Pin list by userId from DB
      const response = await getAllUserSavedPinsByUserId(user.userId);
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
      console.error(error)

      console.log("PinsState:", pinsState);
      console.log("filterPinsState:", filterPinsState);
    } catch (error) {
      console.error(error);

    }
  };

  useEffect(() => {

    handleGetAllUserSavedPins()

  }, []) //only run this effect on the initial render

    handleGetAllUserSavedPins();
  }, []); //only run this effect on the initial render


  useEffect(() => {
    console.log("PinsState lime 41:", pinsState)
  }, [pinsState])


  useEffect(() => {
    console.log("filterPinsState:", filterPinsState)
  }, [filterPinsState])

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

      <hr />

      <div className="boards"></div>

      <div className="user-saved-pins">
        <div className="middle-nav">
          <div>
            {" "}
            <h4>Unorganized ideas</h4>
          </div>
          <div>
            {" "}
            <button>Organize</button>
          </div>
        </div>
        render all user's saved pins (the one he likes)

        <div className='pins-container'>
          {filterPinsState && pinsState.length > 0 ?
            (filterPinsState.map((pin) => {
              return (
                <div className='pin-card-cover' key={pin.title}>
                  <button onClick={() => { navigate(`/main/pinPage/${pin.pin_id}`) }}><SpecificPin pin={pin} /></button>
                </div>
              )
            })) : (
              <p>no pin found</p>
            )}

        <div className="pins-container">
          {filterPinsState && pinsState.length > 0 ? (
            filterPinsState.map((pin) => {
              return (
                <div className="pin-card-cover" key={pin.title}>
                  <button
                    onClick={() => {
                      navigate(`/pinPage/${pin.pin_id}`);
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
      </div>
    </div>
  );
};

export default SavedPins;
