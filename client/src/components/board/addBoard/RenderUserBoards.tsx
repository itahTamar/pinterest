import { useContext, useEffect, useState } from 'react'
import { Board } from '../../../types/board'
import { UserContext } from '../../../contexts/userContext'
import { getAllUsersBoards } from '../../../api/boards/boardApi'
import BoardCard from './BoardCard'
import { useNavigate } from 'react-router-dom'


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
      console.log("At getAllUsersBoards the response is:", response)

      setBoardList(response)
      setFilterBoardList(response)

    } catch (error) {
      console.error(error)
      
    }
  }

  useEffect(() => {
    handleGetAllUsersBoards()
  }, []) //only run this effect on the initial render


  return (
    <div>
      render user boards:
      
      <div className="boards-container">
        {filterBoardList && boardList.length > 0 ? (
          filterBoardList.map((board) => (
            <div className='board' key={board.board_id}>
              <button onClick={() => { navigate(`/main/board/${board.board_id}`) }}><BoardCard board={board}/></button>
            </div>
          ))
        ) : (
          <p>no boards</p>
        )}
      </div>
    </div>
  );
}


