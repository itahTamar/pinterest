import { useState } from "react";
import "./../login/login.scss";
import MoreDetails from "../MoreDetails/MoreDetails";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

//work ok

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleSubmitRegister = async (ev: React.FormEvent<HTMLFormElement>) => {
    try {
      ev.preventDefault();
      const data = { email, password };
      if (!data) throw new Error("register failed - no email or password");
      setShow(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmitRegister}>
          {/* <label>Email</label> */}
          <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pinterest_Logo.svg/1200px-Pinterest_Logo.svg.png"
            alt="Pinterest logo"
          />
        </div>
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
          <div className="input_container">
            <div className="icon2_container">
              <FontAwesomeIcon icon={faLock} />
            </div>
            <input
              type="password"
              name="password"
              autoComplete="off"
              placeholder="Password"
              value={password}
              onInput={(ev) =>
                setPassword((ev.target as HTMLInputElement).value)
              }
            ></input>
          </div>
          <button
            onClick={() => {
              navigate("/registerPage");
            }}
            type="submit"
          >
            Register
          </button>
        </form>
      </div>

      {show ? <MoreDetails email={email} password={password} /> : null}
    </>
  );
};

export default Register;
