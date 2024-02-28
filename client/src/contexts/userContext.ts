import { createContext } from "react";
import { User } from "../types/user";

export const UserContext = createContext<User>({
    userFirstName: '',
    userId: '',
    userLastName: '',
    username: '',
});

export const SavedPinsContext = createContext<any>("");
export const OtherPinsContext = createContext<any>("");