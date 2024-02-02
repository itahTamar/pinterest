// import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";
import "../Navbar2/Navbar2.scss";
import { useNavigate } from "react-router-dom";

export const Navbar2 = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar2">
      <div>
        <button className="register">הרשמה</button>
        <button className="login">התחברות</button>
        <span>אודות</span>
        <span>עסקי</span>
        <span>בלוג</span>
      </div>
      <div className="divImg">
        <div>
        <span>גלו</span></div>
        <div><img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pinterest_Logo.svg/1200px-Pinterest_Logo.svg.png"
          alt="Pinterest logo"
        /></div>
      </div>
    </div>
  );
};
