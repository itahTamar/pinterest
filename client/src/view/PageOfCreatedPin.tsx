import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPinById } from "../api/pins/pinsApi";
import SpecificPin from "../components/Pins/SepecificPin/SpecificPin";
import ChatBox from "../components/chatBox/ChatBox";
import { NavbarCreatedPin } from "../components/navbars/NavbarPin/NavbarCreatedPin";
import { Pin } from "../types/pin";
import "./PinPage/pinPage.scss";
import PinDetails from "../components/Pins/PinDetails/PinDetails";

//rendering the SpecificPin component
const PageOfCreatedPin = () => {
  const [dataPin, setDataPin] = useState<Pin | null>(null);
  let { pin_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const specificPin = async () => {
      if (pin_id == undefined)
        throw new Error("the pin_id in PinPage params is undefined!");
      try {
        const data: Pin = await getPinById(pin_id);
        if (!data) throw new Error("no dog data");
        setDataPin(data);
      } catch (error) {
        console.error("Error fetching specificPin:", error);
      }
    };

    specificPin();
  }, [pin_id]);

  return (
    <>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div className="mainPP">
        <div>
          {dataPin != null ? (
            <div className="divL">
              <SpecificPin key={pin_id} pin={dataPin} />
            </div>
          ) : (
            <p>Pin not found </p>
          )}
        </div>
        {dataPin ? (
          <div>
            <NavbarCreatedPin pin_id={pin_id} dataPin={dataPin} />
            <PinDetails pin={dataPin}/>
            <ChatBox />
          </div>
        ) : (
          <p>no data pin</p>
        )}
      </div>
    </>
  );
};

export default PageOfCreatedPin;
