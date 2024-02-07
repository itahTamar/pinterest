import React from "react";

export const EditProfile = () => {
  return (
    <div>
      <h1>Edit Profile</h1>
      <h3>
        Keep your personal details private. Information you add here is visible
        to any who can view your profile.
      </h3>
      <p>photo</p>
      <div>
        <img src="" alt="" />
        <button>Change</button>
      </div>
      <div>
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
      <input type="text" placeholder="Tell your story" />
      <p>Pronouns</p>
      <input type="text" placeholder="Add your pronouns" />
    </div>
  );
};
