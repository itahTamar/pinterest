import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DropDownMenu } from "../../DropDownMenu/DropDownMenu";
import {
  findTitleAtOtherUsersPins,
} from "../../../api/pins/pinsApi";
import {
  OtherPinsContext,
  UserContext,
} from "../../../contexts/userContext";
import { handleGetAllUsers } from "../../../api/users/userApi";
import { Pin } from "../../../types/pin";

export const Navbar = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const [text, setText] = useState("");
  const [key, setKey] = useState(true);
  const { otherPinsSearch, setOtherPinsSearch } = useContext(OtherPinsContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const handleSearchPins = async () => {
      try {
        if (!user) throw new Error("at handleSearchPins - no user in context");

        const findAtOtherPins: Pin[] = await findTitleAtOtherUsersPins(
          user.username,
          text
        );
        console.log("At Navbar->handleSearchPins the findAtOtherPins:", findAtOtherPins) //got it

        if (!findAtOtherPins)
          throw new Error(
            "At Navbar->handleSearchPins: no other pins get from DB"
          );
          setOtherPinsSearch(findAtOtherPins); //!need to add the rendering after search
        
      } catch (error) {
        console.error(error);
      }
    };

    handleSearchPins();
  }, [key]);

  useEffect(() => {
    console.log(text);
  }, [text]);

  useEffect(() => {
    console.log(otherPinsSearch);
  }, [otherPinsSearch]);

  const handleIsAdmin = async () => {
    try {
      console.log("handleIsAdmin click");
      const response = await handleGetAllUsers(); //response = { ok , results }
      console.log("at handleIsAdmin:", response);
      if (response.ok === false) {
        alert(response.error);
        navigate(`/login`);
      } else {
        if (response.ok) {
          const dataAdmin = response.results;
          console.log("dataAdmin:", dataAdmin);
          navigate(`/admin`, { state: { dataAdmin } }); // Pass allUsers as state
        } else {
          navigate(`/main/homePage`);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Preventing the default behavior of the Enter key (form submission)
      setKey(!key)
    }
  };

  return (
    <div className="navbar">
      <button onClick={handleIsAdmin}>
        <img
          className="admin-btn"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
          alt="logo"
        />
      </button>
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
      <div>
        <input
          className="search"
          type="text"
          placeholder="Search"
          onChange={(ev) => setText((ev.target as HTMLInputElement).value)}
          onKeyDown={handleKeyDown} // Triggering button click on Enter key press
        />
        <button onClick={() => setKey(!key)}>🔎</button>
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
