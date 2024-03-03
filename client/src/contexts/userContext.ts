import  { Dispatch, SetStateAction, createContext } from "react";
import { User } from "../types/user";

export const UserContext = createContext<any>(null);
// export const UserContext = createContext<{user: User | null, setUser: Dispatch<SetStateAction<any>>} | null>(null);

// export const UserContext = createContext<User>({
//   user: {
//     firstName: "", 
//     userId: "",
//     lastName: "",
//     username: "",
//   },
//   setUser: ({}: {}) => ({})
// });


