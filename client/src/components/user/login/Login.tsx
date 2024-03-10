import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../api/users/userApi";
import { UserContext } from "../../../contexts/userContext";
import "./login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

//work ok
const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleSubmitLogin = async (ev: React.FormEvent<HTMLFormElement>) => {
    try {
      ev.preventDefault();
      console.log(
        "At handleSubmit login the email & password are:",
        email,
        password
      );
      const data = await login(email, password);
      if (!data) {
        window.alert(
          "login failed! check your email or password or please register first"
        );
        throw new Error("login failed, please register first");
      }

      const userData = data.data.userData;
      if (!userData) throw new Error("at handleSubmitLogin userData failed");

      setUser(userData);

      navigate(`/main/homePage`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmitLogin}>
        {/* <label>Email</label> */}

        <div className="input_container">
          <div className="icon_container">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <input
            type="email"
            name="email"
            autoComplete="given-name"
            placeholder="Email"
            value={email}
            onInput={(ev) => setEmail((ev.target as HTMLInputElement).value)}
          />
        </div>
        {/* <label>Password</label> */}
        <input
          type="password"
          name="password"
          autoComplete="off"
          placeholder="Password"
          value={password}
          onInput={(ev) => setPassword((ev.target as HTMLInputElement).value)}
        ></input>
        <button type="submit">Login</button>
      </form>
      <button
        className="RegisterFirst"
        onClick={() => {
          navigate("/register");
        }}
      >
        Register First
      </button>
    </div>
  );
};

export default Login;
