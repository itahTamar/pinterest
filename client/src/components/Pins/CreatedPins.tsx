import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../contexts/userContext'
import { useContext, useEffect, useState } from 'react'
import { Pin } from '../../types/pin'
import PinCard from './PinCard'
import { getAllUserCreatedPinsByUsername } from '../../api/pins/pinsApi'

//work ok
const CreatedPins = () => {
    const [pinsState, setPins] = useState<Pin[]>([])
    const [filterPinsState, setFilterPins] = useState<Pin[]>([])
    const navigate = useNavigate()
    const { user } = useContext(UserContext)

    const handleGetAllUserCreatedPinsByUsername = async () => {
        try {
          if (!user.username) throw new Error("at handleGetAllUserSavedPins there is no userId in params");
          
          //use axios to get the Pin list by userId from DB
          const response = await getAllUserCreatedPinsByUsername(user.username)
          if(!response) throw new Error("No response from axios getAllUserCreatedPinsByUsername at CreatedPins");
                  console.log("At CreatedPins/getAllUserCreatedPinsByUsername the response is:", response) //got it
      
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
        handleGetAllUserCreatedPinsByUsername() 
      }, []) //only run this effect on the initial render
    

    return (
        <div id="renderCreated" className='renderCreated'>
            <div className='navbar3'>
                {/* <Navbar3/> sort at left / add at right */}
            </div>
            
            <div className='user-created-pins'>
                render all user created pins
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
            <button onClick={() => { navigate(`/createPin`) }}>Create Pin</button>
        </div>
    )
}

export default CreatedPins
