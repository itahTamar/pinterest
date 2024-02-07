import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../contexts/userContext'
import { useContext, useState } from 'react'
import { Pin } from '../../types/pin'
import PinCard from './PinCard'

const CreatedPins = () => {
    const [pinsState, setPins] = useState<Pin[]>([])
    const [filterPinsState, setFilterPins] = useState<Pin[]>([])
    const navigate = useNavigate()
    const { user } = useContext(UserContext)
    const { username } = user

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
