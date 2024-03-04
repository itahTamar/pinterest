import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { EditPinById } from "../../../api/pins/pinsApi";

export const EditPin = () => {
  const navigate = useNavigate();

  const location = useLocation();
   
  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [link, setLink] = useState<string>("")
  const [board, setBoard] = useState<string>("")

  const handleEditPin = async () => {
 
    const { dataPin } = location.state; // Access all pin's data from location.stat
    if(!dataPin) throw new Error("No dataPin found in location.state at EditPin");
    setTitle(dataPin.title)
    setDescription(dataPin.description)
    setLink(dataPin.link)
    setBoard(dataPin.category)

    const response = await EditPinById(dataPin.pin_id, title, description, link, board) //this work - the data in DB change
    if (!response) throw new Error("No response from axios EditPinById at EditPin");  //here it collapse: Cannot destructure property 'dataPin' of 'location.state' as it is null.
    console.log("At handleEditPin the response is:", response) //
     navigate(`/main/PageOfCreatedPin/${dataPin.pin_id}`)
    //  navigate(`/main/homePage`)
  }

  return (
    <div>
      <h2>Edit Pin</h2>
      <form onSubmit={handleEditPin}>
        <p>Title</p>
        <input
          type="text"
          placeholder="Add a title"
          onInput={(ev) => { setTitle((ev.target as HTMLInputElement).value); }}
        />

        <p>Description</p>
        <input
          id="Description"
          type="text"
          placeholder="Add a detailed description"
          onInput={(ev) => { setDescription((ev.target as HTMLInputElement).value); }}
        />

        <p>Link</p>
        <input
          type="text"
          placeholder="Add a link"
          onInput={(ev) => { setLink((ev.target as HTMLInputElement).value); }}
        />

        <p>Board</p>  {/*nead to be selection only not input */}
        <input
          type="text"
          placeholder="Add a board"
          onInput={(ev) => { setBoard((ev.target as HTMLInputElement).value); }}
        />

        <button type="reset">Reset</button>
        <button type="submit">Save</button>
      </form>

    </div>
  );
};
