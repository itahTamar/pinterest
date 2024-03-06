import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { EditPinById, deletePin } from "../../../api/pins/pinsApi";
//work ok
export const EditPin = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const { dataPin } = location.state; // Access all pin's data from location.stat
  console.log("at handleEditPin at editPin the dataPin is:", dataPin);
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
      
      console.log("At handleEditPin the response is:", response); //

      if (!response)
        throw new Error("No response from axios EditPinById at EditPin"); 
      console.log("At handleEditPin the response is:", response); 
      navigate(`/main/PageOfCreatedPin/${dataPin.pin_id}`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeletePin = async () => {
    try {
      const { dataPin } = location.state; // Access all pin's data from location.stat
      console.log("at handleDeletePin at editPin the dataPin is:", dataPin);
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
    <div>
      <h2>Edit Pin</h2>
      <form onSubmit={handleEditPin}>
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
        <p>Board</p> {/*nead to be selection only not input */}
        <input
          type="text"
          placeholder="Add a board"
          onInput={(ev) => {
            setBoard((ev.target as HTMLInputElement).value);
          }}
        />
        <button type="reset">Reset</button>
        <button type="submit">Save</button>
      </form>
      <button onClick={handleDeletePin}>Delete</button>
    </div>
  );
};
