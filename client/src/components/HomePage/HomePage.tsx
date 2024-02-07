// import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Pin } from '../../types/pin'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../contexts/userContext'
import { getAllOtherUsersPins } from '../../api/pins/pinsApi'
import PinCard from '../Pins/PinCard'

export const HomePage = () => {
  const [pinsState, setPins] = useState<Pin[]>([])
  const [filterPinsState, setFilterPins] = useState<Pin[]>([])
  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  const { userId } = user

  const handleGetAllOtherUsersPins = async () => {
    try {
      if (!userId) throw new Error("at handleGetAllUserSavedPins there is no userId in context");

      //use axios to get the Pin list by userId from DB
      const response = await getAllOtherUsersPins(userId)
      if (!response) throw new Error("No response from axios getAllOtherUsersPins at PinsPage");
      console.log("At getAllOtherUsersPins the response is:", response) 

      //put the list in PinsState and filterPinsState
      const PinList = response;
      console.log("PinList:", PinList)
      setPins(PinList)
      setFilterPins(PinList)

      console.log("PinsState:", pinsState)
      console.log("filterPinsState:", filterPinsState)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    handleGetAllOtherUsersPins()
  }, []) //only run this effect on the initial render


  return (
    <div>
      <Navbar />
      welcome to home page

      <div>all the user boards</div>

      <div>all other user's Pins</div>
        <div className='pins-container'>
          {filterPinsState && pinsState.length > 0 ?
            (filterPinsState.map((pin) => {
              return (
                <div className='pin-card-cover' key={pin.title}>
                  <button onClick={() => { navigate(`/pinPage/${pin.pin_id}`) }}><PinCard pin={pin} /></button>
                </div>
              )
            })) : (
              <p>no pin found</p>
            )}
        </div>
      </div>
  )
}
