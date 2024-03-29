import { FC, useContext } from "react";
import "./NavbarPin.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faEllipsis,
  faShareFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../contexts/userContext";
import { savePinToUserByUserId } from "../../../api/pins/pinsApi";
import { Pin } from "../../../types/pin";

//for pin that not created by the user so he can save them
interface pinProp {
  pin: Pin | null
}

export const NavbarPin: FC<pinProp> = ({ pin }) => {
  const { user } = useContext(UserContext);

  const handleSaveToFavorites = async () => {
    try {
      if (!user) throw new Error("no user in context");
      if(!pin) throw new Error("no pin prop");
      
      const response = await savePinToUserByUserId(pin.pin_id, user.userId);
      if (!response)
        throw new Error(
          "No response from axios savePinToUserByUserId at NavbarPin"
        );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="navbarPin">
      <div className="navbarPin-icons">
        <FontAwesomeIcon className="icon" icon={faShareFromSquare} />
        <FontAwesomeIcon className="icon" icon={faEllipsis} />
      </div>
      <div className="navbarPin-btns">
        <div>
          {pin ? pin.category : null}
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
        <div>
          <button onClick={handleSaveToFavorites}>save</button>
        </div>
      </div>
    </div>
  );
};
