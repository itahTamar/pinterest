import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { findTitleAtOtherUsersPins } from "../../../api/pins/pinsApi";
import { handleGetAllUsers } from "../../../api/users/userApi";
import { OtherPinsContext } from "../../../contexts/pinsContext";
import { UserContext } from "../../../contexts/userContext";
import { Pin } from "../../../types/pin";
import { DropDownMenu } from "../../DropDownMenu/DropDownMenu";
import "./Navbar.scss";

export const Navbar = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const [text, setText] = useState("");
  const [key, setKey] = useState(true);
  const { setSearchedPins } = useContext(OtherPinsContext);
  const  { user }  = useContext(UserContext);
  
  useEffect(() => {
    const handleSearchPins = async () => {
      try {
        if (!user) throw new Error("at handleSearchPins - no user in context");
        if (!text) {
          setSearchedPins([]);
          return;
        }
        const findAtOtherPins: Pin[] = await findTitleAtOtherUsersPins(
          user.username,
          text
        );

        if (!findAtOtherPins)
          throw new Error(
            "At Navbar->handleSearchPins: no other pins get from DB"
          );
        setSearchedPins(findAtOtherPins);
      } catch (error) {
        console.error(error);
      }
    };

    handleSearchPins();
  }, [key]);

  useEffect(() => {
    if (!text) {
      setSearchedPins([]);
    }
  }, [text]);

  const handleIsAdmin = async () => {
    try {
      const response = await handleGetAllUsers(); //response = { ok , results }
      if (response.ok === false) {
        alert(response.error);
        navigate(`/login`);
      } else {
        if (response.ok) {
          const dataAdmin = response.results;
          navigate(`/admin`, { state: { dataAdmin } }); // Pass allUsers as state
        } else {
          navigate(`/main/homePage`);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="navbar">
      <div onClick={handleIsAdmin}>
        <img
          className="admin-btn"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
          alt="logo"
        />
      </div>
      <div>
        <button
          className="HomePageButton"
          onClick={() => {
            navigate(`/main/homePage`);
          }}
        >
          Home
        </button>
      </div>
      <div>
        <button
          className="CreateButton"
          onClick={() => {
            navigate(`/main/createPin`);
          }}
        >
          {" "}
          Create
        </button>
      </div>
      <div className="divSearch">
        <input
          className="search"
          type="text"
          placeholder="Search"
          onChange={(ev) => setText((ev.target as HTMLInputElement).value)}
        />
        <div onClick={() => setKey(!key)}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>

      <div>
        <button
          className="icon"
          id="user"
          onClick={() => {
            navigate(`/main/userPage`);
          }}
        >
          <FontAwesomeIcon icon={faUser} />
        </button>
      </div>
      <div>
        <button className="icon" onClick={() => setOpenMenu((prev) => !prev)}>
          <FontAwesomeIcon icon={faCaretDown} />
        </button>
      </div>
      {openMenu && <DropDownMenu />}
    </div>
  );
};
