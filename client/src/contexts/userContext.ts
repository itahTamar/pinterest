import  { createContext } from "react";
import { User } from "../types/user";

export const UserContext = createContext<User>({
  user: {
    firstName: "", 
    userId: "",
    lastName: "",
    username: "",
  },
  setUser: ({}: {}) => ({})
});


