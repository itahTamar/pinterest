import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../contexts/userContext'
import { useContext } from 'react'

const CreatedPins= () => {
  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  const {username} = user

    return (
        <div id="renderCreated" className='renderCreated'>
            <div className='navbar3'>
                {/* <Navbar3/> sort at left / add at right */}
            </div>
            <div className='user-created-pins'>
                render all user created pins
            </div>
            <button onClick={()=>{navigate(`/createPin`)}}>Create Pin</button>
        </div>
    )
}

export default CreatedPins
