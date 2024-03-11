import { AddPin } from "../../components/Pins/AddPin/AddPin";
import { Navbar } from "../../components/navbars/Navbar/Navbar";
import "./CreatePin.scss";

export const CreatePin = () => {
  return (
    <div>
      <Navbar/>
      <h1>Create Pin</h1>
      <div>
        <AddPin />
      </div>
    </div>
  );
};
