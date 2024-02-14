// import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";
import "../Navbar2/Navbar2.scss";
import PopupLogin from "../popup/PopupLogin";
import PopupRegister from "../popup/PopupRegister";
import { useState } from "react";

export const Navbar2 = () => {
  const [showPopup, setShowPopup] = useState(false);

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
        <button className="login" onClick={() => setShowPopup(true)}>Log in</button>
        {showPopup && <PopupLogin onClose={() => setShowPopup(false)} />}
        <button className="register" onClick={() => setShowPopup(true)}>Sigh up</button>
        {showPopup && <PopupRegister onClose={() => setShowPopup(false)} />}
      </div>
    </div>
  );
};
