// import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { Pin } from '../../types/pin'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../contexts/userContext'
import { getAllOtherUsersPins } from '../../api/pins/pinsApi'
import PinCard from '../Pins/PinCard'
import { getAllUsersBoards } from '../../api/boards/boardApi'
import { Board } from '../../types/board'

export const HomePage = () => {
  const [pinsState, setPins] = useState<Pin[]>([])
  const [filterPinsState, setFilterPins] = useState<Pin[]>([])
  const [boardList, setBoardList] = useState<Board[]>([])
  const navigate = useNavigate()
  const { user } = useContext(UserContext)

  const handleGetAllOtherUsersPins = async () => {
    try {
      if (!user.userId) throw new Error("at handleGetAllUserSavedPins there is no userId in context");

      //use axios to get the Pin list by userId from DB
      const response = await getAllOtherUsersPins(user.userId)
      if (!response) throw new Error("No response from axios getAllOtherUsersPins at HomePage");
      console.log("At getAllOtherUsersPins the response is:", response) //got it

      //put the list in PinsState and filterPinsState
      setPins(response)
      setFilterPins(response)

    } catch (error) {
      console.error(error)
    }
  }

  const handleGetAllUsersBoards = async () => {
    try {
      if (!user.userId) throw new Error("at handleGetAllUserSavedPins there is no userId in context");
      
      //use axios to get all user boards title from DB by userId
      const response = await getAllUsersBoards(user.userId)
      if (!response) throw new Error("No response from axios GetAllUsersBoardsTitle at HomePage");
      console.log("At GetAllUsersBoardsTitle the response is:", response)

      setBoardList(response)

    } catch (error) {
      console.error(error)
      
    }
  }

  useEffect(() => {
    handleGetAllOtherUsersPins()
    handleGetAllUsersBoards()
  }, []) //only run this effect on the initial render

  useEffect(() => {
    console.log("PinsState:", pinsState);  //got it
  }, [pinsState]);

  useEffect(() => {
    console.log("filterPinsState:", filterPinsState);  //got it
  }, [filterPinsState]);

  return (
    <div>
      welcome to home page

      <div>more ideas or the user boards</div> 
      <div className="boards-container">
        {boardList && boardList.length > 0 ?
        (boardList.map((board) => {
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

      <div>all other user's Pins</div>
      <div className='pins-container'>
        {filterPinsState && pinsState.length > 0 ?
          (filterPinsState.map((pin) => {
            return (
              <div className='pin-card-cover' key={pin.title}>
                <button onClick={() => { navigate(`/main/pinPage/${pin.pin_id}`) }}><PinCard pin={pin} /></button>
              </div>
            )
          })) : (
            <p>no pin found</p>
          )}
      </div>
    </div>
  )
}
