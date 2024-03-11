import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./popup.scss";
import Login from "../user/login/Login";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface PopupLoginProps {
  onClose: () => void;
}

const PopupLogin: React.FC<PopupLoginProps> = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close" onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <Login />
      </div>
    </div>
  );
};

export default PopupLogin;
