import {
  faEllipsis,
  faPlus,
  faQuestion,
  faTableColumns,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import RenderSuggestedPinByCategoryOnly from "../../components/Pins/RenderSuggestedPin/RenderSuggestedPinByCategoryOnly";
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
      <div>
        {/* find some ideas for this boars:{" "} */}
        {/* (div box with more pin in that category of other users that thw user yet saved) */}
        {boardName !== undefined ? (
          <RenderSuggestedPinByCategoryOnly category={boardName} />
        ) : (
          <p>undefined category</p>
        )}
      </div>
      <div className="buttons">
        <div>
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <div>
          <FontAwesomeIcon icon={faQuestion} />
        </div>
      </div>
    </div>
  );
};

export default BoardPage;
