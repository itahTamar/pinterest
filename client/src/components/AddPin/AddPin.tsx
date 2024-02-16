import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AddPin.scss";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import { addPin } from "../../api/pins/pinsApi";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export const AddPin = () => {
  // const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [board, setBoard] = useState<string>("");
  const [pin, setPin] = useState(null);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [image, setImage] = useState("")

  if (!user) throw new Error("At UserPage no user in context");

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    try {
      ev.preventDefault();
      const response = await addPin(title, image, description, link, user.userId);
      console.log(response);

      setPin(response.data.results[0]);
      if (response) {
        navigate("/main/userPage");
      }
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="AddPin">
      <div className="AddPin_image">
        <div>
          <FontAwesomeIcon className="icon" icon={faShareFromSquare} />
          <p>Choose a file or drag and drop it here</p>
        </div>
        <hr />
        <button onClick={() => setImage("image")}>*Save from URL</button>
      </div>
      <div className="AddPin_form">
        <form onSubmit={handleSubmit}>
          <p>*Title</p>
          <input
            type="text"
            value={title}
            onInput={(ev) => setTitle((ev.target as HTMLInputElement).value)}
            placeholder="Add a title"
          />
          <p>Description</p>
          <input
            id="Description"
            type="text"
            value={description}
            onInput={(ev) =>
              setDescription((ev.target as HTMLInputElement).value)
            } placeholder="Add a description"
          />
          <p>Link</p>
          <input
            type="link"
            value={link}
            onInput={(ev) => setLink((ev.target as HTMLInputElement).value)}
            placeholder="Add a link"
          />

          <p>Board</p>
          <input
            type="text"
            value={board}
            onInput={(ev) => setBoard((ev.target as HTMLInputElement).value)}
            placeholder="Choose a board"
          />
        </form>
        <button type='submit' className="publish">Publish</button>
      </div>
    </div>
  );
};
