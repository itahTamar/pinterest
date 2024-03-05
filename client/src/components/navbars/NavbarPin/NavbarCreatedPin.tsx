import { FC } from "react";
import "./NavbarPin.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCaretDown, faEllipsis,faShareFromSquare,} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Pin } from "../../../types/pin";
// import { UserContext } from "../../../contexts/userContext";
interface pinProp {
  pin_id: number | string | undefined
  dataPin: Pin 
}

export const NavbarCreatedPin: FC<pinProp> = ({pin_id, dataPin}) => {
    const navigate = useNavigate();

  return (
    <div className="navbarPin">
    <div className="navbarPin-icons">
      <FontAwesomeIcon className="icon" icon={faShareFromSquare} />
      <FontAwesomeIcon icon={faEllipsis} />
    </div>
    <div className="navbarPin-btns">
        <button>board <FontAwesomeIcon icon={faCaretDown} /></button>
        <button onClick={() => { navigate(`/main/editPin/${pin_id}`, {state: {dataPin}}) }}>Edit Pin</button>  {/* Pass all pin's data as state*/}
    </div>
    </div>
  );
};