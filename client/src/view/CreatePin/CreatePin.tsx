import React from "react";
import { AddPin } from "../../components/AddPin/AddPin";
import { Navbar } from "../../components/Navbar/Navbar";
import "./CreatePin.scss";

export const CreatePin = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <h1>Create Pin</h1>
      <div>
        <AddPin />
      </div>
    </div>
  );
};
