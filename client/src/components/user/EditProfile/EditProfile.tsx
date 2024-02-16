import React from "react";
import "./EditProfile.scss";
import { Navbar } from "../../navbars/Navbar/Navbar";

export const EditProfile = () => {
  return (
    <div>
      <Navbar />
      <div className="profile-edit">
        <h2>Edit Profile</h2>
        <h3>
          Keep your personal details private. Information you add here is
          visible to anyone who can view your profile.
        </h3>
        <p>photo</p>
        <div className="imgdiv">
          <img
            src="https://th.bing.com/th/id/OIP.ONfngQFEugONLEQvUQV4vwHaE7?w=253&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt=""
          />
          <button>Change</button>
        </div>
        <div className="namediv">
          <div>
            <p>First name</p>
            <input type="text" />
          </div>
          <div>
            <p>Last name</p>
            <input type="text" />
          </div>
        </div>
        <p>About</p>
        <input className="About" type="text" placeholder="Tell your story" />
        <p>Pronouns</p>
        <input
          className="Pronouns"
          type="text"
          placeholder="Add your pronouns"
        />
        <p>
          Choose up to 2 sets of pronouns to appear on your profile so others
          know how to refer to you. You can edit or remove these any time.
        </p>
        <p>Website</p>
        <input
          className="Pronouns"
          type="text"
          placeholder="Add your pronouns"
        />
        <p>Username</p>
        <input
          className="Pronouns"
          type="text"
          placeholder="Add your pronouns"
        />
      </div>
      <div className="button-container">
        <button>Save</button>
        <button>reset</button>
      </div>
    </div>
  );
};
