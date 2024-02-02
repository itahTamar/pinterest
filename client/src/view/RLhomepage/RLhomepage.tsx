// import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar2 } from "../../components/Navbar2/Navbar2";
import Register from "../../components/user/Register";
import "./RLhomepage.scss";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
            <img className="img1"
              src="https://i.pinimg.com/236x/86/37/ef/8637efdd7c760f4aa91c912a66019512.jpg"
              alt=""
            />
            <img className="img2"
              src="https://i.pinimg.com/236x/83/08/15/830815d52f100a6b455eeea25d0aa317.jpg"
              alt=""
            />
            <img className="img3"
              src="https://i.pinimg.com/236x/f2/55/c0/f255c09639eea83e8fa9e540e9e71fc3.jpg"
              alt=""
            />
            <img className="img4"
              src="https://i.pinimg.com/236x/4e/96/ef/4e96effe59486a69893430e890da7a2a.jpg"
              alt=""
            />
            <button>
              easy chicken dinner <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          <div className="divText">
            <h2>Search for an idea</h2>
            <p>
              What do you want to try next? Think of something youwre into like
              "easy chicken dinner" and see what you find.
            </p>
            <button>Explore</button>
          </div>
        </div>
        <div className="div3">
          <h2>Save ideas you like</h2>
          <p>Collect your favorites so you can get back to them later.</p>
          <button>Explore</button>
          <img src="https://www.pinterest.com/pin/463026405445375788/" alt="" />
          <img
            src="https://i.pinimg.com/236x/6f/1f/5e/6f1f5e586d67a7a8eeedf3ddaeed8d93.jpg"
            alt=""
          />
          <img
            src="https://i.pinimg.com/236x/16/15/a5/1615a5cc942d0dd4dfbf98a005c0e03c.jpg"
            alt=""
          />
          <img
            src="https://i.pinimg.com/236x/06/ca/08/06ca0840ec143512c2e3d11a5b33bd4b.jpg"
            alt=""
          />
          <img
            src="https://i.pinimg.com/236x/8e/ed/6f/8eed6f94f9ecf4be9465e359f4f075b9.jpg"
            alt=""
          />
          <img
            src="https://i.pinimg.com/236x/e2/f7/5e/e2f75eb3ea5c03cb8fa0fa3279114bd0.jpg"
            alt=""
          />
          <img
            src="https://i.pinimg.com/236x/77/3a/75/773a7501929fe1b89d8138e283f02603.jpg"
            alt=""
          />
          <img
            src="https://i.pinimg.com/236x/27/93/7e/27937eb1c379a5db4107bd636aeec640.jpg"
            alt=""
          />
        </div>
        <div className="div4">
          <h2>See it, make it, try it, do it</h2>
          <p>
            The best part of Pinterest is discovering new things and ideas from
            people around the world.
          </p>
          <button>Explore</button>
          <img
            src="https://i.pinimg.com/564x/a8/f0/dc/a8f0dcdb3e3f5f09b37ebc41abac4f4a.jpg"
            alt=""
          />
        </div>
        <div className="div5">
          <h2>Sign in to get your ideas</h2>
          <div id="third">
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RLhomepage;
