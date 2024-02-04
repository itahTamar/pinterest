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
        <button className="login" onClick={() => { navigate("/login") }}>Log in</button>
        <button className="register" onClick={() => { navigate("/register") }}>Sigh up</button>
      </div>
    </div>
  );
};
