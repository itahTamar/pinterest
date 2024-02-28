import { createContext } from "react";
import { User } from "../types/user";
import { Pin } from "../types/pin";

export const UserContext = createContext<User>({
    userFirstName: '',
    userId: '',
    userLastName: '',
    username: '',
});

export const SavedPinsContext = createContext<{
    savedPins: Pin[]; // Assuming savedPins is an array of Pin objects
    setSavedPins: React.Dispatch<React.SetStateAction<Pin[]>>;
}>({ savedPins: [], setSavedPins: () => {} });

export const OtherPinsContext = createContext<{
    otherPins: Pin[]; // Assuming otherPins is an array of Pin objects
    setOtherPins: React.Dispatch<React.SetStateAction<Pin[]>>;
}>({ otherPins: [], setOtherPins: () => {} });