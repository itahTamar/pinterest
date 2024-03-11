import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import "./App.scss";
import { UserContext } from "./contexts/userContext";
import { useState } from "react";
import { PinSearchContextProvider } from "./contexts/pinsContext";

function App() {
  const [user, setUser] = useState<any>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <PinSearchContextProvider>
        <RouterProvider router={router} />
      </PinSearchContextProvider>
    </UserContext.Provider>
  );
}

export default App;
