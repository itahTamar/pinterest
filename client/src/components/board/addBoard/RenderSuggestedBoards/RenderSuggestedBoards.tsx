import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsersBoards } from "../../../../api/boards/boardApi";
import { UserContext } from "../../../../contexts/userContext";
import { Board } from "../../../../types/board";
import "./RenderSuggestedBoards.scss";
import RenderPinImg from "../../../Pins/RenderPinImg";
import { Pin } from "../../../../types/pin";
import { getPinsByCategory2 } from "../../../../api/pins/pinsApi";

//work ok
export const RenderSuggestedBoards = () => {
  const [boardList, setBoardList] = useState<Board[]>([]);
  const [filterBoardList, setFilterBoardList] = useState<Board[]>([]);
  const { user } = useContext(UserContext);
  const [pinsByCategory, setPinByCategory] = useState<Pin[]>([]);

  const navigate = useNavigate();

  const handleGetAllOtherBoardsByTitle = async () => {
    try {
      if (!user.userId)
        throw new Error(
          "at handleGetAllUserSavedPins there is no userId in context"
        );
      console.log("at renderSuggestedBoard the user.useId:", user.useId);
      //use axios to get all other users pin by category
      const response = await getAllUsersBoards(user.userId);
      if (!response)
        throw new Error(
          "No response from axios getAllUsersBoards at render-suggested-boards"
        );
      console.log("At getAllUsersBoards the response is:", response);

      setBoardList(response);
      setFilterBoardList(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetAllPinByCategory = async (category: string) => {
    try {
      const response = await getPinsByCategory2(category, user.username);
      if (!response)
        throw new Error(
          "No response from axios getPinsByCategory2 at render-suggested-boards"
        );
        setPinByCategory(response)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (user) {
      handleGetAllOtherBoardsByTitle();
    }
  }, [user]);

  return (
    <div>
      {/* render more idea to user boards: */}
      <div className="boards-container">
        {filterBoardList && boardList.length > 0 ? (
          filterBoardList.map((board) => {
            return (
              <div className="board" key={board.name}>
                <div
                  onClick={() => {
                    handleGetAllPinByCategory(board.name);
                    navigate(`/main/boardPage/${board.name}`, { state: {pinsByCategory} });
                  }}
                >
                  {" "}
                  <p>More ideas for</p>
                  <h2>{board.name}</h2>
                  <RenderPinImg category={board.name} />
                </div>
              </div>
            );
          })
        ) : (
          <p>no boards</p>
        )}
      </div>
    </div>
  );
};
