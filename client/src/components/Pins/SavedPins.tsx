import { useEffect, useState } from 'react'
import { getAllUserSavedPins } from '../../api/pins/pinsApi'
import { useNavigate, useParams } from 'react-router-dom'
import { Pin } from '../../types/pin'
import PinCard from './PinCard'

const SavedPins = () => {
  const [pinsState, setPins] = useState<Pin[]>([])
  const [filterPinsState, setFilterPins] = useState<Pin[]>([])
  const navigate = useNavigate()
  const { username } = useParams()


  const handleGetAllUserSavedPins = async () => {
    try {
      if (!username) throw new Error("at handleGetAllUserSavedPins there is no username in params");
      
      //use axios to get the Pin list from DB
      const response = await getAllUserSavedPins(username)
      if(!response) throw new Error("No response from axios getAllPins at PinsPage");
              console.log("At PinsPage/handelGetAllPins the response is:", response) //got it
  
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
    handleGetAllUserSavedPins() 
  }, []) //only run this effect on the initial render

  return (
    <div id="renderSaved" className='renderSaved'>
      <div className='navbar3'>
        <button>icon sort</button>
        <button>icon + to add pin and board</button>
      </div>

      <div className='boards'></div>

      <div className='user-saved-pins'>
        <div className='middle-nav'>
          <h4>Unorganized ideas</h4>
          <button>Organize</button>
        </div>

        render all user's saved pins (the one he likes)
        <div className='pins-container'>
        {filterPinsState && pinsState.length > 0 ?
          (filterPinsState.map((pin) => {
            return (
              <div className='pin-card-cover' key={pin.title}>
                <button onClick={() => { navigate(`/pinPage/${pin.pin_id}`) }}><PinCard pin={pin}/></button>                
              </div>
            )
          })) : (
            <p>no pin found</p>
          )}
      </div>
      </div>
    </div>
  )
}

export default SavedPins
