// import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";
import './Navbar.scss'

export const Navbar = () => {
  return (
    <div>
      <button>
      <FontAwesomeIcon className="icon" icon={faCaretDown} />
      </button>
      <button>
      <FontAwesomeIcon className="icon" icon={faUser} />
      </button>
      <input className="search" type="text" placeholder="search " />
      <button className="AddButton"> Add</button>
      <button className="HomePageButton">Home page</button>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmgyyIKl5PAu0J0fSGntKciPTG6aD1Ep4s9bosLM2X-g&s"
        alt="logo"
      />
    </div>
  );
};
