import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsersBoards } from "../../../../api/boards/boardApi";
import { UserContext } from "../../../../contexts/userContext";
import { Board } from "../../../../types/board";
import "./RenderSuggestedBoards.scss";

//work ok
export const RenderSuggestedBoards = () => {
  const [boardList, setBoardList] = useState<Board[]>([]);
  const [filterBoardList, setFilterBoardList] = useState<Board[]>([]);
  const { user } = useContext(UserContext);

  const navigate = useNavigate();
  
  const handleGetAllOtherBoardsByTitle = async () => {
    try {
      if (!user.userId)
        throw new Error(
          "at handleGetAllUserSavedPins there is no userId in context"
        );
      console.log("at renderSuggestedBoard the user.useId:", user.useId)
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
                    navigate(`/main/boardPage/${board.name}`);
                  }}
                >
                  {" "}
                  {/*this route not work. it should move to the user page with suggested pin in that category, for naw it move to board page in that category*/}
                  <p>More ideas for</p>
                  <h2>{board.name}</h2>
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
