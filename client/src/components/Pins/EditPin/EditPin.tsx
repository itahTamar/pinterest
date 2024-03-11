import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { EditPinById, deletePin } from "../../../api/pins/pinsApi";
import './EditPin.scss'
import '../AddPin/AddPin.scss'
//work ok
export const EditPin = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const { dataPin } = location.state; // Access all pin's data from location.stat
  if (!dataPin)
    throw new Error("No dataPin found in location.state at EditPin");
  const [title, setTitle] = useState<string>(dataPin.title);
  const [description, setDescription] = useState<string>(dataPin.description);
  const [link, setLink] = useState<string>(dataPin.link);
  const [board, setBoard] = useState<string>(dataPin.category);

  const handleEditPin = async (ev: React.FormEvent<HTMLFormElement>) => {
    try {
      ev.preventDefault();
      const response = await EditPinById(
        dataPin.pin_id,
        title,
        description,
        link,
        board
      ); //this work - the data in DB change
      
      if (!response)
        throw new Error("No response from axios EditPinById at EditPin"); 
      const pinUpdateDate = response[0]
      navigate(`/main/PageOfCreatedPin/${dataPin.pin_id}`, {state: {pinUpdateDate}});
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeletePin = async () => {
    try {
      const { dataPin } = location.state; // Access all pin's data from location.stat
      if (!dataPin)
      throw new Error("No dataPin found in location.state at EditPin");
      const response = await deletePin(dataPin.pin_id)
      if(!response) throw new Error("at handleDeletePin no response");
      navigate('/main/userPage');
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="EditPin">
      <h1>Edit Pin</h1>
      <form className="AddPin_form" onSubmit={handleEditPin}>
        <p>Title</p>
        <input
          type="text"
          placeholder="Add a title"
          onInput={(ev) => {
            setTitle((ev.target as HTMLInputElement).value);
          }}
        />
        <p>Description</p>
        <input
          id="Description"
          type="text"
          placeholder="Add a detailed description"
          onInput={(ev) => {
            setDescription((ev.target as HTMLInputElement).value);
          }}
        />
        <p>Link</p>
        <input
          type="text"
          placeholder="Add a link"
          onInput={(ev) => {
            setLink((ev.target as HTMLInputElement).value);
          }}
        />
        <p>Board</p> 
        <input
          type="text"
          placeholder="Add a board"
          onInput={(ev) => {
            setBoard((ev.target as HTMLInputElement).value);
          }}
        />
        <button className="register" type="reset">Reset</button>
        <button className="login" type="submit">Save</button>
        <button className="register" onClick={handleDeletePin}>Delete</button>
      </form>
      
    </div>
  );
};
