import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPin } from "../../../api/pins/pinsApi";
import { UserContext } from "../../../contexts/userContext";
import { AddInput } from "./AddInput";
import "./AddPin.scss";
//work ok
export const AddPin = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [board, setBoard] = useState<string>("");
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow(!show);
  }

  const handleSubmitAddPin = async (ev: React.FormEvent<HTMLFormElement>) => {
    try {
      ev.preventDefault();
      console.log(
        "at AddPin handleSubmit the states are:",
        title,
        description,
        link,
        board,
        image
      );
      if (user) {
        const response = await addPin(
          title,
          image,
          description,
          link,
          board,
          user.userId
        );
        console.log("at AddPin handleSubmit the response:", response);

        if (response) {
          navigate("/main/userPage");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form className="AddPin" onSubmit={handleSubmitAddPin}>
        <div className="AddPin_image">
          <div className="divimg">
            <FontAwesomeIcon className="icon" icon={faShareFromSquare} />
            <p>Choose a file or drag and drop it here</p>
          </div>
          <hr />
          <button type="button" onClick={toggleShow}>
            *Save from URL
          </button>
          <div className="">{show && <AddInput setImage={setImage} />}</div>
        </div>
        <div className="AddPin_form">
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
            }
            placeholder="Add a description"
          />
          <p>Link</p>
          <input
            type="link"
            value={link}
            onInput={(ev) => setLink((ev.target as HTMLInputElement).value)}
            placeholder="Add a link"
          />
          <p>*Board</p>
          <input
            type="text"
            value={board}
            onInput={(ev) => setBoard((ev.target as HTMLInputElement).value)}
            placeholder="Choose a board"
          />
          <button type="submit" className="publish">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};
