// import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DropDownMenu } from "../../DropDownMenu/DropDownMenu";
import { findTitleAtOtherUsersPins, findTitleAtUserSavedPinsByUserId } from "../../../api/pins/pinsApi";
import { OtherPinsContext, SavedPinsContext, UserContext } from "../../../contexts/userContext";
import { handleGetAllUsers } from "../../../api/users/userApi";

export const Navbar = () => {
  const navigate = useNavigate()
  const [openMenu, setOpenMenu] = useState(false);
  const [text, setText] = useState("")
  const { savedSearch, setSavedSearch } = useContext(SavedPinsContext)
  const { otherSearch, setOtherSearch } = useContext(OtherPinsContext)
  const { user } = useContext(UserContext)
  const [allUsers, setAllUsers] = useState([])

  useEffect(() => {

    const handleSearchPins = async () => {
      try {
        const findAtOtherPins = await findTitleAtOtherUsersPins(user.userId, text)
        if (!findAtOtherPins) throw new Error("At Navbar->handleSearchPins: no other pins get from DB");
        setOtherSearch(findAtOtherPins)

        const findAtSaved = await findTitleAtUserSavedPinsByUserId(user.userId, text)
        if (!findAtSaved) throw new Error("At Navbar->handleSearchPins: no saved pins get from DB");
        setSavedSearch(findAtSaved)

      } catch (error) {
        console.error(error)

      }
    }

    handleSearchPins()

  }, [text])

  useEffect(() => {
    console.log(text)
  }, [text])

  useEffect(() => {
    console.log(savedSearch)
  }, [savedSearch])

  useEffect(() => {
    console.log(otherSearch)
  }, [otherSearch])

  const handleIsAdmin = async () => {
    try {
      console.log("handleIsAdmin click")
      const response = await handleGetAllUsers()
      console.log("at handleIsAdmin:",response)
      if (response) {
        setAllUsers(response.data.response)
        navigate(`/admin`, {state: {allUsers}}) // Pass allUsers as state
      } else {
        navigate(`/main/homePage`)
      }
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <div className="navbar">
      <button onClick={ handleIsAdmin }>test admin</button>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
          alt="logo"
        />
      </div>
      <div>
        <button className="HomePageButton" onClick={() => { navigate(`/main/homePage`) }}>Home</button>
      </div>
      <div>
        <button className="CreateButton" onClick={() => { navigate(`/main/createPin`) }}> Create</button>
      </div>
      <div>
        <input className="search" type="text" placeholder="Search" onInput={(ev) => setText((ev.target as HTMLInputElement).value)} />
      </div>

      <div>
        <button className="icon" id="user" onClick={() => { navigate(`/main/userPage`) }} >
          <FontAwesomeIcon icon={faUser} />
        </button>
      </div>
      <div>
        <button className="icon" onClick={() => setOpenMenu((prev) => !prev)}>
          <FontAwesomeIcon icon={faCaretDown} />
        </button>
      </div>
      {
        openMenu && <DropDownMenu />
      }
    </div>
  );
};
