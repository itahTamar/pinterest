// import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Register from "../../components/user/Register";
import "./RLhomepage.scss";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Navbar2 } from "../../components/navbars/Navbar2/Navbar2";

const RLhomepage = () => {
  return (
    <div>
      <Navbar2 />
      <div className="main">
        <div className="div1">
          <h2>Get your next idea</h2>
        </div>
        <div className="div2">
          <div className="divImg">
            <img
              className="img1"
              src="https://i.pinimg.com/236x/86/37/ef/8637efdd7c760f4aa91c912a66019512.jpg"
              alt=""
            />
            <img
              className="img2"
              src="https://i.pinimg.com/236x/83/08/15/830815d52f100a6b455eeea25d0aa317.jpg"
              alt=""
            />
            <img
              className="img3"
              src="https://i.pinimg.com/236x/f2/55/c0/f255c09639eea83e8fa9e540e9e71fc3.jpg"
              alt=""
            />
            <img
              className="img4"
              src="https://i.pinimg.com/236x/83/08/15/830815d52f100a6b455eeea25d0aa317.jpg"
              alt=""
            />
            <button>
              easy chicken dinner <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          <div className="divText1">
            <h2>Search for an idea</h2>
            <p>
              What do you want to try next? Think of something like
              "easy chicken dinner" and see what you find.
            </p>
            <button>Explore</button>
          </div>
        </div>
        <div className="div3">
          <div className="divText2">
            <h2>Save ideas you like</h2>
            <p>Collect your favorites so you can get back to them later.</p>
            <button>Explore</button>
          </div>
          <div className="divImg2">
            <img
              className="img1"
              src="https://i.pinimg.com/564x/8c/19/c5/8c19c5331c300349147e57bd4f7b6ad3.jpg"
              alt=""
            />

            <img
              className="img2"
              src="https://i.pinimg.com/564x/06/09/12/060912db19ae3c89079d6f2cd14aa054.jpg"
              alt=""
            />
            <img
              className="img3"
              src="https://i.pinimg.com/236x/11/62/ae/1162ae6e797110a57a613b3a9937a0e9.jpg"
              alt=""
            />
            <img
              className="img4"
              src="https://i.pinimg.com/236x/bf/05/4b/bf054bd97ed96b7f2262029fe0f7bf02.jpg"
              alt=""
            />
            <img
              className="img5"
              src="https://i.pinimg.com/236x/9a/8f/29/9a8f29c7a304d085c2872ef3bdcb2240.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="div4">
          <div className="divImg3">
            <img src="https://s.pinimg.com/webapp/shop-de8ddf10.png" alt="" />
          </div>
          <div className="divText3">
            <h2>See it, make it, try it, do it</h2>
            <p>
              The best part of Pinterest is discovering new things and ideas
              from people around the world.
            </p>
            <button>Explore</button>
          </div>
        </div>
        <div className="div5">
          <div className="divText4">
          <h2>Sign up to get your ideas</h2>
          </div>
          <div className="register" id="third">
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RLhomepage;
