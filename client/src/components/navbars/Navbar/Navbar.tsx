// import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { DropDownMenu } from "../../DropDownMenu/DropDownMenu";

export const Navbar = () => {
  const navigate = useNavigate()
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="navbar">
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmgyyIKl5PAu0J0fSGntKciPTG6aD1Ep4s9bosLM2X-g&s"
          alt="logo"
        />
      </div>
      <div>
        <button className="HomePageButton" onClick={()=>{navigate(`/main/homePage`)}}>Home</button>
      </div>
      <div>
        <button className="CreateButton" onClick={()=>{navigate(`/main/createPin`)}}> Create</button>
      </div>
      <div>
        {/* <Debouncing setFilterPins={setFilterPins} BooksState={pinState} /> */}
        <input className="search" type="text" placeholder="Search" />
      </div>

      <div>
        <button className="icon" id="user" onClick={()=>{navigate(`/main/userPage`)}} >
          <FontAwesomeIcon icon={faUser} />
        </button>
      </div>
      <div>
        <button className="icon" onClick={() => setOpenMenu ((prev) => !prev)}>
          <FontAwesomeIcon icon={faCaretDown} />
        </button>
      </div>
      {
        openMenu && <DropDownMenu />
      }
    </div>
  );
};
