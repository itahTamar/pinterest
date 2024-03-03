import { createContext } from "react";
import { Pin } from "../types/pin";

export const PinsContext = createContext<{
    PinsSearch: Pin[]; // Assuming savedPins is an array of Pin objects
    setPinsSearch: React.Dispatch<React.SetStateAction<Pin[]>>;
  }>({ PinsSearch: [], setPinsSearch: () => {} });
  
  export const OtherPinsContext = createContext<{
    otherPinsSearch: Pin[]; // Assuming otherPins is an array of Pin objects
    setOtherPinsSearch: React.Dispatch<React.SetStateAction<Pin[]>>;
  }>({ otherPinsSearch: [], setOtherPinsSearch: () => {} });

  export const SavedPinsContext = createContext<{
    savedSearch: Pin[]; // Assuming otherPins is an array of Pin objects
    setOtherPinsSearch: React.Dispatch<React.SetStateAction<Pin[]>>;
  }>({ savedSearch: [], setOtherPinsSearch: () => {} });