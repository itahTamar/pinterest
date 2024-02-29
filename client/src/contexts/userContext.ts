import  { createContext } from "react";
import { User } from "../types/user";

export const UserContext = createContext<User>({
  user: {
    userFirstName: "", 
    userId: "",
    userLastName: "",
    username: "",
  },
  setUser: ({}: {}) => ({})
});


