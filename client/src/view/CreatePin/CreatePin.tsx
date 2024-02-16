import { AddPin } from "../../components/AddPin/AddPin";
import "./CreatePin.scss";
import { Navbar } from "../../components/navbars/Navbar/Navbar";

export const CreatePin = () => {
  return (
    <div>
      <Navbar />
      <h1>Create Pin</h1>
      <div>
        <AddPin />
      </div>
    </div>
  );
};
