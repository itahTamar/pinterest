import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { CreatePin } from "./view/CreatePin/CreatePin";
// import './App.scss'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CreatePin />
    </>
  );
}

export default App;
