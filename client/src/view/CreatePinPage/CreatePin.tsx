import { AddPin } from "../../components/AddPin/AddPin";
import "./CreatePin.scss";
import { Navbar } from "../../components/navbars/Navbar/Navbar";
import { useState } from "react";

export const CreatePin = () => {
  const [check, setCheck] = useState("home")
  return (
    <div>
      <Navbar setCheck={setCheck}/>
      <h1>Create Pin</h1>
      <div>
        <AddPin />
      </div>
    </div>
  );
};
