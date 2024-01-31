// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AddPin.scss";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";

export const AddPin = () => {
  return (
    <div className="AddPin">
      <div className="AddPin_image">
        <div>
          <FontAwesomeIcon className="icon" icon={faShareFromSquare} />
          <p>Choose a file or drag and drop it here</p>
        </div>
        <hr />
        <button>Save from URL</button>
      </div>
      <div className="AddPin_form">
        <form>
          <p>Title</p>
          <input type="text" placeholder="Add a title" />
          <p>Description</p>
          <input
            id="Description"
            type="text"
            placeholder="Add a detailed description"
          />
          <p>Link</p>
          <input type="text" placeholder="Add a link" />
          <p>Board</p>
          <input type="text" placeholder="Add a board" />
        </form>
        <button className="publish">Publish</button>
      </div>
    </div>
  );
};
