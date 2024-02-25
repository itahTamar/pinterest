import { useContext, useState } from "react";
import SavedPins from "../../components/Pins/SavedPins";
import CreatedPins from "../../components/Pins/CreatedPins";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";
import "./userPage.scss"
import { RenderUserBoards } from "../../components/board/addBoard/RenderUserBoards";

const UserPage = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { user } = useContext(UserContext);

  if (!user) throw new Error("At UserPage no user in context");

  console.log("at userPage userData:", user);

  function toggleShow() {
    setShow(!show);
  } 

  return (
    <div className="profile-wrapper">
      <div >
        <img
          className="userImg"
          src="https://www.dtapet.com/wp-content/uploads/2022/09/1020-60-60.jpg"
          alt="jungle"
        />
        <h2>
          {user.userFirstName} {user.userLastName}
        </h2>
        <div className="divUsername">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmgyyIKl5PAu0J0fSGntKciPTG6aD1Ep4s9bosLM2X-g&s"
            alt="logo"
          />
          <h4>
            {user.username}
          </h4>
        </div>
        <h3>0 following</h3>
        <div className="profile-btn">
          <button>Share</button>
          <button onClick={() => { navigate(`/main/editProfile`) }}>
            Edit profile
          </button>
        </div>
        <div className="rendering-btn">
          <button onClick={toggleShow}>Created</button>
          <button onClick={toggleShow}>Saved</button>
        </div>
      </div>

      <div>user boards here
        <RenderUserBoards />
      </div>

      <div className="">{show ? <CreatedPins /> : <SavedPins />}</div>
    </div>
  );
};

export default UserPage;
