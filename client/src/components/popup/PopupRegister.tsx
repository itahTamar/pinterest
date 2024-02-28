import "./popup.scss";
import Register from "../user/Register";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface PopupLoginProps {
  onClose: () => void;
}

const PopupRegister: React.FC<PopupLoginProps> = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close" onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <Register />
      </div>
    </div>
  );
};

export default PopupRegister;
