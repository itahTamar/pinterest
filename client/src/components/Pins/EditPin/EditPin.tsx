import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { EditPinById } from "../../../api/pins/pinsApi";

export const EditPin = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [board, setBoard] = useState<string>("");

  const handleEditPin = async (ev: React.FormEvent<HTMLFormElement>) => {
    try {
      ev.preventDefault();
      console.log("hello from handleEditPin");
      console.log("handleEditPin title at state", title);    
      console.log("handleEditPin description at state", description);    
      console.log("handleEditPin link at state", link);    
      console.log("handleEditPin board at state", board);    
      
      const { dataPin } = location.state; // Access all pin's data from location.stat
      console.log("at handleEditPin at editPin the dataPin is:", dataPin);
      if (!dataPin)
        throw new Error("No dataPin found in location.state at EditPin");
      if (title === "") setTitle(dataPin.title);
      if (description === "")setDescription(dataPin.description);
      if (link === "")setLink(dataPin.link);
      if (board === "")setBoard(dataPin.category);

      console.log("handleEditPin title2 at state", title);    
      console.log("handleEditPin description2 at state", description);    
      console.log("handleEditPin link2 at state", link);    
      console.log("handleEditPin board2 at state", board);

      const response = await EditPinById(
        dataPin.pin_id,
        title,
        description,
        link,
        board
      ); //this work - the data in DB change
      
      console.log("At handleEditPin the response is:", response); //

      if (!response)
        throw new Error("No response from axios EditPinById at EditPin"); //get this error
      console.log("At handleEditPin the response is:", response); //
      navigate(`/main/PageOfCreatedPin/${dataPin.pin_id}`);
    } catch (error) {
      console.error(error);
    }
  };

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
    </div>
  );
};
