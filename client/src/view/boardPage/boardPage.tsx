import { useParams } from "react-router-dom";
import RenderPinImg from "../../components/Pins/RenderPinImg";
import RenderSuggestedPin from "../../components/Pins/RenderSuggestedPin/RenderSuggestedPin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faTableColumns,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import "./boardPage.scss";

const BoardPage = () => {
  const { boardName } = useParams<string>();
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
      {/* @ts-ignore
      <div>
        <RenderPinImg category={boardName} />
      </div> */}
      <div>
        {/* find some ideas for this boars:{" "} */}
        {/* (div box with more pin in that category of other users that he yet saved) */}
        {boardName !== undefined ? (
          <RenderSuggestedPin category={boardName} />
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
