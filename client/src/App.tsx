import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

import "./App.scss";
// import { UserContext } from "./contexts/userContext";
// import { useState } from "react";

function App() {
  // const [user, setUser] = useState()


  return (
  //  <UserContext.Provider value={{user, setUser}}>
     <RouterProvider router={router} />
  //  </UserContext.Provider>
  
  );
}

export default App;
