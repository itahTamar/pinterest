import {
  faEllipsis,
  faTableColumns,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useParams } from "react-router-dom";
import RenderSuggestedPin2 from "../../components/Pins/RenderSuggestedPin/RenderSuggestedPin";
import SpecificPin from "../../components/Pins/SepecificPin/SpecificPin";
import "./boardPage.scss";
import RenderPinImg from "../../components/Pins/RenderPinImg";
import PinCard from "../../components/Pins/PinCard/PinCard";
import RenderOthersPins from "../../components/Pins/RenderOthersPins/RenderOthersPins";

const BoardPage = () => {
  const { boardName } = useParams<string>();
  const location = useLocation()
  const { pinsByCategory } = location.state; // Access all pin's data from location.stat
  console.log("at board page the board name:", boardName);

  return (
    <div className="boardPage">
      <div className="boardName">
        <div>
          <h2>{boardName}</h2>
        </div>
        <div>
          <FontAwesomeIcon className="iconoption" icon={faEllipsis} />
        </div>
      </div>
      <div className="boardIcons">
        <div className="icon">
          <FontAwesomeIcon className="icon-icon" icon={faWandMagicSparkles} />
          <div>
            <p>more idea</p>
          </div>
        </div>
        <div className="icon">
          <FontAwesomeIcon className="icon-icon" icon={faTableColumns} />
          <div>
            <p>organize</p>
          </div>{" "}
          {/*only visual boxes */}
        </div>
      </div>
      
      <div>
        {/* {pinsByCategory && pinsByCategory.length>0 ?
          {pinsByCategory.map((pin) => {

          })} : null
      }
        <RenderSuggestedPin category={dataPin.category} pin_id={pin_id} /> */}
      </div> 
      <div>
        {/* find some ideas for this boars:{" "} */}
        {/* (div box with more pin in that category of other users that he yet saved) */}
        {boardName !== undefined ? (
          <RenderSuggestedPin2 category={boardName} pin_id={undefined} />
        ) : (
          <p>undefined category</p>
        )}
      </div>
      <div className="buttons">
        <div>+</div> {/* only visual btn (in the down-middle of the box)*/}
        <div>?</div>
      </div>
    </div>
  );
};

export default BoardPage;
