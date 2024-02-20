import { FC, useContext } from "react";
import "./NavbarPin.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCaretDown, faEllipsis,faShareFromSquare,} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../contexts/userContext";
import { savePinToUserByUserId } from "../../../api/pins/pinsApi";
interface pinProp {
  pin_id: number | string | undefined 
}

export const NavbarPin: FC<pinProp> = ({pin_id}) => {
  const { user } = useContext(UserContext)
 
  const handleSaveToFavorites = async () => {
    try {
      if (!user) throw new Error("no user in context");
      const response = await savePinToUserByUserId(pin_id, user.userId)
      if (!response) throw new Error("No response from axios savePinToUserByUserId at NavbarPin");
        console.log("At savePinToUserByUserId the response is:", response)

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="navbarPin">
    <div className="navbarPin-icons">
      <FontAwesomeIcon className="icon" icon={faShareFromSquare} />
      <FontAwesomeIcon icon={faEllipsis} />
    </div>
    <div className="navbarPin-btns">
        <button>board <FontAwesomeIcon icon={faCaretDown} /></button>
        <button onClick={handleSaveToFavorites}>save</button>
    </div>
    </div>
  );
};
