import React from "react";
import "./NavbarPin.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCaretDown, faEllipsis,faShareFromSquare,} from "@fortawesome/free-solid-svg-icons";

export const NavbarPin = () => {
  return (
    <div className="navbarPin">
    <div className="navbarPin-icons">
      <FontAwesomeIcon className="icon" icon={faShareFromSquare} />
      <FontAwesomeIcon icon={faEllipsis} />
    </div>
    <div className="navbarPin-btns">
        <button>board <FontAwesomeIcon icon={faCaretDown} /></button>
        <button>save</button>
    </div>
    </div>
  );
};
