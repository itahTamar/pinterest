import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import "./App.scss";
import { UserContext } from "./contexts/userContext";
import { useState } from "react";
import { User } from "./types/user";

// Define the type for the user state
interface UserState {
  userFirstName: string;
  userId: string;
  userLastName: string;
  username: string;
}

// Define the type for setUser
type SetUser = React.Dispatch<React.SetStateAction<UserState | undefined>>;

function App() {
  const [user, setUser] = useState<UserState>(); // Specify the type of user

  console.log("at App.tsx the user in context is:", user)

  // Pass the correct type for setUser to UserContext.Provider
  const userContextValue = { user, setUser } as User;

  return (
    <UserContext.Provider value={userContextValue}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;

