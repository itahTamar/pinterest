import { ReactNode, createContext, useState } from "react";
import { Pin } from "../types/pin";

export const OtherPinsContext = createContext<any>(null);

interface Props {
  children: ReactNode;
}

export const PinSearchContextProvider = ({ children }: any) => {
  const [searchedPins, setSearchedPins] = useState<Pin[]>([]);

  return (
    <OtherPinsContext.Provider value={{ searchedPins, setSearchedPins }}>
      {children}
    </OtherPinsContext.Provider>
  );
};
