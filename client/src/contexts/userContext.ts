// import { createContext } from "react";
// import { User } from "../types/user";

// export const UserContext = createContext<User | undefined>(undefined)

import { createContext, Dispatch, SetStateAction } from "react";
// import { User } from "../types/user";

// interface UserContextProps {
//   userData: User | undefined;
//   setUserData: Dispatch<SetStateAction<User | undefined>>;
// }

export const UserContext = createContext<any>(null);
