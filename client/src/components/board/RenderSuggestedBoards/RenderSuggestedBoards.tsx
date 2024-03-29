import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RenderSuggestedBoards.scss";
import { Board } from "../../../types/board";
import { UserContext } from "../../../contexts/userContext";
import { gelAllOtherBoardsById } from "../../../api/boards/boardApi";
import RenderPinImg from "../../Pins/RenderPinImg";

//work ok
export const RenderSuggestedBoards = () => {
  const [boardList, setBoardList] = useState<Board[]>([]);
  const [filterBoardList, setFilterBoardList] = useState<Board[]>([]);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleGetAllOtherBoardsById = async () => {
    try {
      if (!user.userId)
        throw new Error(
          "at handleGetAllOtherBoardsById there is no userId in context"
        );
      //use axios to get all other users pin by category
      const response = await gelAllOtherBoardsById(user.userId);
      if (!response)
        throw new Error(
          "No response from axios gelAllOtherBoardsById at render-suggested-boards"
        );
      console.log("At gelAllOtherBoardsById the response is:", response);

      setBoardList(response);
      setFilterBoardList(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (user) {
      handleGetAllOtherBoardsById();
    }
  }, [user]);

  return (
    <div>
      {/* render more idea to user boards: */}
      <div className="boards-container">
        {filterBoardList && boardList.length > 0 ? (
          filterBoardList.map((board) => {
            return (
              <div key={board.name}>
                <div
                  className="board"
                  onClick={() => {
                    navigate(`/main/boardPage/${board.name}`);
                  }}
                >
                  <div>
                    <RenderPinImg category={board.name} />
                  </div>
                  <div className="boardHP">
                    <p>More ideas for</p>
                    <h2>{board.name}</h2>
                  </div>
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
