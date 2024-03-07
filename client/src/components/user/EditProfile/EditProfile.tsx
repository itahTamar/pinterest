import React, { useContext, useEffect } from "react";
import "./EditProfile.scss";
import { Navbar } from "../../navbars/Navbar/Navbar";
import { useState } from "react";
import { AddInput } from "../../Pins/AddPin/AddInput";
import { updateUser } from "../../../api/users/userApi";
import { UserContext } from "../../../contexts/userContext";
import { useNavigate } from "react-router-dom";

export const EditProfile = () => {
  const { user, setUser } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [image, setImage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [about, setAbout] = useState("");
  const [website, setWebsite] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  function toggleShow() {
    setShow(!show);
  }

   useEffect(() => {
    if (user) {
      setImage(user.photo)
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setAbout(user.about)
      setWebsite(user.website)
      setPronouns(user.pronouns)
      setUsername(user.username);
    }
  }, [user]);

  const handleSubmitEditProfile = async (ev: React.FormEvent<HTMLFormElement>) => {
    try {
      ev.preventDefault();
      const response = await updateUser(
        user.userId,
        image,
        firstName,
        lastName,
        about,
        pronouns,
        website,
        username
      );

      if (response) {
        setUser(response)
        navigate("/main/userPage");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="profile-edit">
        <h2>Edit Profile</h2>
        <h3>
          Keep your personal details private. Information you add here is
          visible to anyone who can view your profile.
        </h3>
        <form className="editProfile" onSubmit={handleSubmitEditProfile}>
          <p>photo</p>
          <div className="imgdiv">
            <img
              src="https://th.bing.com/th/id/OIP.ONfngQFEugONLEQvUQV4vwHaE7?w=253&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="profile image"
            />
            <button onClick={toggleShow}>Change</button>
            <div className="">{show && <AddInput setImage={setImage} />}</div>
          </div>
          <div className="namediv">
            <div>
              <p>First name</p>
              <input
                type="text"
                value={firstName}
                onInput={(ev) =>
                  setFirstName((ev.target as HTMLInputElement).value)
                }
              />
            </div>
            <div>
              <p>Last name</p>
              <input
                type="text"
                value={lastName}
                onInput={(ev) =>
                  setLastName((ev.target as HTMLInputElement).value)
                }
              />
            </div>
          </div>
          <p>About</p>
          <input
            className="About"
            type="text"
            placeholder="Tell your story"
            value={about}
            onInput={(ev) => setAbout((ev.target as HTMLInputElement).value)}
          />
          <p>Pronouns</p>
          <input
            className="Pronouns"
            type="text"
            placeholder="Add your pronouns"
            value={pronouns}
            onInput={(ev) => setPronouns((ev.target as HTMLInputElement).value)}
          />
          <p>
            Choose up to 2 sets of pronouns to appear on your profile so others
            know how to refer to you. You can edit or remove these any time.
          </p>
          <p>Website</p>
          <input
            className="website"
            type="text"
            placeholder="Add a link to drive traffic to your site"
            value={website}
            onInput={(ev) => setWebsite((ev.target as HTMLInputElement).value)}
          />
          <p>Username</p>
          <input
            className="Pronouns"
            type="text"
            value={username}
            onInput={(ev) => setUsername((ev.target as HTMLInputElement).value)}
          />
          <p>www.pinterest.com/${user.username}</p>
          <div className="button-container">
            <button type="submit">Save</button>
            <button type="reset">reset</button>
          </div>
        </form>
      </div>
    </div>
  );
};
