// import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";
import "../Navbar2/Navbar2.scss";
import { useState } from "react";
import PopupLogin from "../../popup/PopupLogin";
import PopupRegister from "../../popup/PopupRegister";

export const Navbar2 = () => {
  const [showPopupLogin, setShowPopupLogin] = useState(false);
  const [showPopupRegister, setShowPopupRegister] = useState(false);

  return (
    <div className="navbar2">
      <div className="divImg">
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pinterest_Logo.svg/1200px-Pinterest_Logo.svg.png"
            alt="Pinterest logo"
          />
        </div>
        <div>
          <span>Explore</span>
        </div>
      </div>
      <div>
        <span>About</span>
        <span>Business</span>
        <span>Blog</span>
        <button className="login" onClick={() => setShowPopupLogin(true)}>Log in</button>
        {showPopupLogin && <PopupLogin onClose={() => setShowPopupLogin(false)}/> }
        <button className="register" onClick={() => setShowPopupRegister(true)}>Sigh up</button>
        {showPopupRegister && <PopupRegister onClose={() => setShowPopupRegister(false)}/> }
      </div>
    </div>
  );
};
