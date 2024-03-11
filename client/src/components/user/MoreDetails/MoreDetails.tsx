import React, { FC, useState } from "react";
import { register } from "../../../api/users/userApi";
import { useNavigate } from "react-router-dom";
import "./MoreDetails.scss";

//work ok
interface userDataProp {
  email: string;
  password: string;
}

const MoreDetails: FC<userDataProp> = ({ email, password }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [about, setAbout] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [website, setWebsite] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmitEditProfile = async (
    ev: React.FormEvent<HTMLFormElement>
  ) => {
    try {
      ev.preventDefault();
      if (!email || !password || !firstName || !lastName || !username)
        throw new Error("At EditProfile Necessary information is missing");

      const data = await register(
        email,
        password,
        username,
        firstName,
        lastName,
        about,
        pronouns,
        website
      );

      if (!data) throw new Error("register failed");
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>More Details</h2>
      <form className="moreDetailsForm" onSubmit={handleSubmitEditProfile}>
        <div>
          <input type="text" placeholder="Photo" />

          <input
            type="text"
            name="firstName"
            autoComplete="given-name"
            placeholder="first name"
            value={firstName}
            onInput={(ev) =>
              setFirstName((ev.target as HTMLInputElement).value)
            }
          />

          <input
            type="text"
            name="lastName"
            autoComplete="given-name"
            placeholder="Last name"
            value={lastName}
            onInput={(ev) => setLastName((ev.target as HTMLInputElement).value)}
          />

          <input
            type="text"
            name="about"
            autoComplete="given-name"
            placeholder="About"
            value={about}
            onInput={(ev) => setAbout((ev.target as HTMLInputElement).value)}
          />

          <input
            type="text"
            name="pronouns"
            autoComplete="given-name"
            placeholder="Pronouns"
            value={pronouns}
            onInput={(ev) => setPronouns((ev.target as HTMLInputElement).value)}
          />

          <input
            type="text"
            name="website"
            autoComplete="given-name"
            placeholder="Website"
            value={website}
            onInput={(ev) => setWebsite((ev.target as HTMLInputElement).value)}
          />

          
          <input
            type="text"
            name="username"
            autoComplete="given-name"
            placeholder="*Username"
            value={username}
            onInput={(ev) => setUsername((ev.target as HTMLInputElement).value)}
            />

          <div>
            <button type="reset">Reset</button>
            <button type="submit">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MoreDetails;
