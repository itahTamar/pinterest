import { useContext } from "react";
import RenderOthersPins from "../../components/Pins/RenderOthersPins/RenderOthersPins";
import RenderOtherSearchPin from "../../components/Pins/search/RenderOtherSearchPin";
import { RenderSuggestedBoards } from "../../components/board/addBoard/RenderSuggestedBoards/RenderSuggestedBoards";
import { OtherPinsContext } from "../../contexts/pinsContext";

export const HomePage = () => {
  const { searchedPins } = useContext(OtherPinsContext);

  return (
    <div>
      <RenderSuggestedBoards />

      {searchedPins && searchedPins.length > 0 ? (
        <RenderOtherSearchPin />
      ) : (
        <RenderOthersPins />
      )}
    </div>
  );
};
