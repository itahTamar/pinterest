import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPinById } from "../../api/pins/pinsApi";
import ChatBox from "../../components/chatBox/ChatBox";
import { NavbarPin } from "../../components/navbars/NavbarPin/NavbarPin";
import { Pin } from "../../types/pin";
import "./pinPage.scss";
import SpecificPin from "../../components/Pins/SepecificPin/SpecificPin";
import RenderSuggestedPin from "../../components/Pins/RenderSuggestedPin/RenderSuggestedPin";
import PinDetails from "../../components/Pins/PinDetails/PinDetails";

//rendering the SpecificPin component
const PinPage = () => {
  const [dataPin, setDataPin] = useState<Pin | null>(null);
  let { pin_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const specificPin = async () => {
      if (pin_id == undefined)
        throw new Error("the pin_id in PinPage params is undefined!");
      console.log("at specificPin the pin_id", pin_id);
      try {
        const data: Pin = await getPinById(pin_id);
        if (!data) throw new Error("no dog data");

        console.log("at specificPin the data:", data);

        setDataPin(data);
      } catch (error) {
        console.error("Error fetching specificPin:", error);
      }
    };

    specificPin();
  }, [pin_id]);

  return (
    <>
      <div
        className="back"
        onClick={() => {
          navigate(-1);
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
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
        <div>
          <NavbarPin pin={dataPin} />
          <PinDetails pin={dataPin}/>
          <ChatBox />
        </div>
      </div>
      <div className="morePins">
        <h3>More to explore</h3>
      </div>

      <div>
        {dataPin != null ? (
          <RenderSuggestedPin category={dataPin.category} pin_id={pin_id} />
        ) : (
          <p>Pin not found</p>
        )}
      </div>
    </>
  );
};

export default PinPage;
