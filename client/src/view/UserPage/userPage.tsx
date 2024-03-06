import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreatedPins from "../../components/Pins/CreatedPin/CreatedPins";
import SavedPins from "../../components/Pins/SavedPins/SavedPins";
import RenderUserPageSearchPin from "../../components/Pins/search/RenderUserPageSearchPin";
import { UserContext } from "../../contexts/userContext";
import "./userPage.scss";
import { OtherPinsContext } from "../../contexts/pinsContext";
import RenderOtherSearchPin from "../../components/Pins/search/RenderOtherSearchPin";

const UserPage = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);  //true is showing the saved-pins 
  const { user } = useContext(UserContext);
  const { searchedPins } = useContext(OtherPinsContext);

  if (!user) throw new Error("At UserPage no user in context");

  console.log("at userPage userData:", user);

  function toggleShowCreate() {
    setShow(false);
  }

  function toggleShowSave() {
    setShow(true);
  }

  useEffect(()=>{console.log("show=",show)},[show])

  return (
    <div className="profile-wrapper">
      <div >
        <img
          className="userImg"
          src="https://www.dtapet.com/wp-content/uploads/2022/09/1020-60-60.jpg"
          alt="jungle"
        />
        <h2>
          {user.firstName} {user.lastName}
        </h2>
        <div className="divUsername">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
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
          <button onClick={toggleShowCreate}>Created</button>
          <button onClick={toggleShowSave}>Saved</button>
        </div>
      </div>

      <div className="userSearch">   {/* here we render the search results of this page*/}
          { searchedPins && searchedPins.length > 0  ? 
          <RenderOtherSearchPin /> : 
          <div className="">{show ? <SavedPins /> : <CreatedPins />}</div> }
      </div>
      
    </div>
  );
};

export default UserPage;
