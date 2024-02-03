// // import React from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";
// import "./Navbar.scss";
// import { useNavigate } from "react-router-dom";

// export const Navbar = () => {
//   const navigate = useNavigate()
//   return (
//     <div className="navbar">
//       <div>
//         <img
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmgyyIKl5PAu0J0fSGntKciPTG6aD1Ep4s9bosLM2X-g&s"
//           alt="logo"
//         />
//       </div>
//       <div>
//         <button className="HomePageButton" onClick={()=>{navigate("/homePage")}}>Home</button>
//       </div>
//       <div>
//         <button className="CreateButton" onClick={()=>{navigate("/createPin")}}> Create</button>
//       </div>
//       <div>
//         <input className="search" type="text" placeholder="Search" />
//       </div>

//       <div>
//         <button className="icon" id="user" onClick={()=>{navigate("/userPage")}} >
//           <FontAwesomeIcon icon={faUser} />
//         </button>
//       </div>
//       <div>
//         <button className="icon">
//           <FontAwesomeIcon icon={faCaretDown} />
//         </button>
//       </div>
//     </div>
//   );
// };

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleNavigate = (path:any) => {
    navigate(path);
    setDropdownOpen(false); // Close the dropdown after navigating
  };

  return (
    <div className="navbar">
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmgyyIKl5PAu0J0fSGntKciPTG6aD1Ep4s9bosLM2X-g&s"
          alt="logo"
        />
      </div>
      <div>
        <button className="HomePageButton" onClick={() => navigate("/homePage")}>Home</button>
      </div>
      <div>
        <button className="CreateButton" onClick={() => navigate("/createPin")}>Create</button>
      </div>
      <div>
        <input className="search" type="text" placeholder="Search" />
      </div>
      <div>
        <button className="icon" id="user" onClick={() => navigate("/userPage")}>
          <FontAwesomeIcon icon={faUser} />
        </button>
      </div>
      <div className="dropdown-container">
        <button className="icon" onClick={handleToggleDropdown}>
          <FontAwesomeIcon icon={faCaretDown} />
        </button>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <button onClick={() => handleNavigate("/dropdownItem1")}>Dropdown Item 1</button>
            <button onClick={() => handleNavigate("/dropdownItem2")}>Dropdown Item 2</button>
            {/* Add more dropdown items as needed */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

