import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../contexts/userContext'
import { getAllUsersBoards } from '../../api/boards/boardApi'
import { Board } from '../../types/board'

export const RenderBoards = () => {
  const [boardList, setBoardList] = useState<Board[]>([])
  const [filterBoardList, setFilterBoardList] = useState<Board[]>([])
  const { user } = useContext(UserContext)

  const handleGetAllUsersBoards = async () => {
    try {
      if (!user.userId) throw new Error("at handleGetAllUserSavedPins there is no userId in context");
      
      //use axios to get all user boards title from DB by userId
      const response = await getAllUsersBoards(user.userId)
      if (!response) throw new Error("No response from axios GetAllUsersBoardsTitle at HomePage");
      console.log("At GetAllUsersBoardsTitle the response is:", response)

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
    <div>render user boards:
      <div className="boards-container">
        {filterBoardList && boardList.length > 0 ?
        (filterBoardList.map((board) => {
          return
          <div className='board'>
            <h3>More ideas for</h3>
            <h2>${board.title}</h2>
          </div>
        })) : (
          <p>no bourds</p>
        )
      } 
      </div>

    
    </div>
  )
}
