import { createContext } from "react";
import { Pin } from "../types/pin";

export const SavedPinsContext = createContext<{
    savedPinsSearch: Pin[]; // Assuming savedPins is an array of Pin objects
    setSavedPinsSearch: React.Dispatch<React.SetStateAction<Pin[]>>;
  }>({ savedPinsSearch: [], setSavedPinsSearch: () => {} });
  
  export const OtherPinsContext = createContext<{
    otherPinsSearch: Pin[]; // Assuming otherPins is an array of Pin objects
    setOtherPinsSearch: React.Dispatch<React.SetStateAction<Pin[]>>;
  }>({ otherPinsSearch: [], setOtherPinsSearch: () => {} });