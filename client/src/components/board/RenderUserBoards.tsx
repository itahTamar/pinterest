import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Board } from '../../types/board';
import { UserContext } from '../../contexts/userContext';
import { getAllUsersBoards } from '../../api/boards/boardApi';
import RenderPinImg from '../Pins/RenderPinImg';

export const RenderUserBoards = () => {
  const [boardList, setBoardList] = useState<Board[]>([])
  const [filterBoardList, setFilterBoardList] = useState<Board[]>([])
  const { user } = useContext(UserContext)
  const navigate = useNavigate()

  const handleGetAllUsersBoards = async () => {
    try {
      if (!user.userId) throw new Error("at handleGetAllUserSavedPins there is no userId in context");
      //use axios to get all user boards title from DB by userId
      const response = await getAllUsersBoards(user.userId)
      if (!response) throw new Error("No response from axios getAllUsersBoards at render-user-boards");

      setBoardList(response)
      setFilterBoardList(response)

    } catch (error) {
      console.error(error)      
    }
  }

  useEffect(() => {
    if (user){
      handleGetAllUsersBoards()
    }
  }, [user]) 

  return (
    <div>
      {/* render user boards:*/}
      <div className="boards-container">
        {filterBoardList && boardList.length > 0 ? (
          filterBoardList.map((board) => {
            return (
              <div className="" key={board.name}>
                <div onClick={() => {navigate(`/main/boardPage/${board.name}`); }}>
                  {" "}
                  <RenderPinImg category={board.name} />

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


