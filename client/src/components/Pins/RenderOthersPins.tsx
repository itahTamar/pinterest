import { useContext, useEffect, useState } from 'react'
import { getAllOtherUsersPins } from '../../api/pins/pinsApi'
import { UserContext } from '../../contexts/userContext'
import { useNavigate } from 'react-router-dom'
import { Pin } from '../../types/pin'
import PinCard from './PinCard'

//work ok

const RenderOthersPins = () => {
    const [pinsState, setPins] = useState<Pin[]>([])
    const [filterPinsState, setFilterPins] = useState<Pin[]>([])
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
  
 
    useEffect(() => {
      handleGetAllOtherUsersPins()
    }, []) //only run this effect on the initial render
  
    useEffect(() => {
      console.log("PinsState:", pinsState);  //got it
    }, [pinsState]);
  
    useEffect(() => {
      console.log("filterPinsState:", filterPinsState);  //got it
    }, [filterPinsState]);

  return (
    <>
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
    </>
  )
}

export default RenderOthersPins