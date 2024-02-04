import React from 'react'
import { getAllUserSavedPins } from '../../api/pins/pinsApi'

interface Pin {
  pin_id: number,
  image: string,
  title: string,
  description: 
}

const SavedPins = () => {
  const [pinState, setPins] = useState<Book[]>([])
  const [filterPinsState, setFilterPins] = useState<Pin[]>([])
  const navigate = useNavigate()

  const handleGetAllUserSavedPins = async () => {

    try {
      //use axios to get the Pin list from DB
      const response = await getAllUserSavedPins()
      if(!response) throw new Error("No response from axios getAllPins at PinsPage");
              console.log("At PinsPage/handelGetAllPins the response is:", response) //got it
  
      //put the list in PinState and filterPinsState
      const PinList = response;
      console.log("PinList:", PinList)
      setPins(PinList)
      setFilterPins(PinList)

      console.log("PinState:", PinState)
      console.log("filterPinsState:", filterPinsState)
     } catch (error) {
      console.error(error)
    }
  }

  return (
    <div id="renderSaved" className='renderSaved'>
      <div className='navbar3'>
        <button>icon sort</button>
        <button>icon + to add pin and board</button>
      </div>
      <div className='boards'></div>
      <div className='user-pins'>
        <div className='middle-nav'>
          <h4>Unorganized ideas</h4>
          <button>Organize</button>
        </div>
        render all user's saved pins (the one he likes)
      </div>
    </div>
  )
}

export default SavedPins
