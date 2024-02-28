import React from "react";
import "./NavbarPin.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCaretDown, faEllipsis,faShareFromSquare, faStar,} from "@fortawesome/free-solid-svg-icons";
import "../NavbarPin/NavbarPin.scss"

export const NavbarPin = () => {
  return (
    <div className="navbarPin">
    <div className="navbarPin-icons">
      <FontAwesomeIcon className="icon" icon={faShareFromSquare} />
      <FontAwesomeIcon icon={faEllipsis} />
      <FontAwesomeIcon icon={faStar} />
    </div>
    <div className="navbarPin-btns">
        <button>board <FontAwesomeIcon icon={faCaretDown} /></button>
        <button>save</button>
    </div>
    </div>
  );
};