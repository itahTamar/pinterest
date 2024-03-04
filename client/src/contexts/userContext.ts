import { createContext } from "react";
import { User } from "../types/user";
import { Pin } from "../types/pin";

export const UserContext = createContext<User>({
    userFirstName: '',  //!this dose all the problam?!
    userId: '',
    userLastName: '',
    username: '',
});

export const SavedPinsContext = createContext<{
    savedPinsSearch: Pin[]; // Assuming savedPins is an array of Pin objects
    setSavedPinsSearch: React.Dispatch<React.SetStateAction<Pin[]>>;
}>({ savedPinsSearch: [], setSavedPinsSearch: () => {} });

export const OtherPinsContext = createContext<{
    otherPinsSearch: Pin[]; // Assuming otherPins is an array of Pin objects
    setOtherPinsSearch: React.Dispatch<React.SetStateAction<Pin[]>>;
}>({ otherPinsSearch: [], setOtherPinsSearch: () => {} });
