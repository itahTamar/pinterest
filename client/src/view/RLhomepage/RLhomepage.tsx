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
        <div className="bigdiv">
          <h2>קבלו את הרעיון</h2>
        </div>
        <div className="bigdiv">
          <div>
          <h2>חפשו את הרעיון</h2>
          <p>
            מה הדבר הבא שאתם רוצים לנסות? חשבו על משהו שמעניין אתכם כמו "ארוחת
            ערב פשוטה עם עו" וראו מה תמצאו
          </p>
          <button>גלו</button>
          </div>
          <div>
            <img src="https://i.pinimg.com/236x/86/37/ef/8637efdd7c760f4aa91c912a66019512.jpg" alt="" />
            <img src="https://i.pinimg.com/236x/bb/65/01/bb6501de96abd1b29ecdda4d2b43da65.jpg" alt="" />
            <img src="https://i.pinimg.com/236x/b8/d7/1b/b8d71becdf0609c0cf7d62ee4f0e3235.jpg" alt="" />
            <img src="https://i.pinimg.com/236x/4e/96/ef/4e96effe59486a69893430e890da7a2a.jpg" alt="" />
            <button>ארוחת ערב קלה עם עוף <FontAwesomeIcon icon={faMagnifyingGlass} /></button>
          </div>
        </div>
        <div className="bigdiv">
          <h2>שמרו רעיונות שאתם אוהבים</h2>
          <p>אספו את המועדפים שלכם כדי שתוכלו לחזור אליהם בהמשך
          </p>
          <button>גלו</button>
          <img src="https://www.pinterest.com/pin/463026405445375788/" alt="" />
          <img src="https://i.pinimg.com/236x/6f/1f/5e/6f1f5e586d67a7a8eeedf3ddaeed8d93.jpg" alt="" />
          <img src="https://i.pinimg.com/236x/16/15/a5/1615a5cc942d0dd4dfbf98a005c0e03c.jpg" alt="" />
          <img src="https://i.pinimg.com/236x/06/ca/08/06ca0840ec143512c2e3d11a5b33bd4b.jpg" alt="" />
          <img src="https://i.pinimg.com/236x/8e/ed/6f/8eed6f94f9ecf4be9465e359f4f075b9.jpg" alt="" />
          <img src="https://i.pinimg.com/236x/e2/f7/5e/e2f75eb3ea5c03cb8fa0fa3279114bd0.jpg" alt="" />
        </div>
        <div className="bigdiv">
          <h2>ראו, צרו, נסו, עשו</h2>
          <p>החלק הטוב ביותר ב- Pinterest הוא גילוי דברים ורעיונות חדשים מאנשים בכל רחבי העולם
          </p>
          <button>גלו</button>
          <img src="https://i.pinimg.com/564x/a8/f0/dc/a8f0dcdb3e3f5f09b37ebc41abac4f4a.jpg" alt="" />
        </div>
        <div className="bigdiv">
          <h2>הרשמו כדי לקבל את הרעיונות שלכם</h2>
          <div id="third">
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RLhomepage;
