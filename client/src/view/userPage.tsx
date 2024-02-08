import { useContext, useState } from 'react'
import SavedPins from '../components/Pins/SavedPins'
import CreatedPins from '../components/Pins/CreatedPins'
import { UserContext } from '../contexts/userContext'
import { useNavigate } from "react-router-dom";

const UserPage = () => {
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const { user } = useContext(UserContext)

    if (!user) throw new Error("At UserPage no user in context");
    
    console.log("at userPage userData:", user)
    
    function toggleShow() {
        setShow(!show)
    }


    return (
        <div>
            <div className='profile-wrapper'>
                <img className='userImg' src='https://www.dtapet.com/wp-content/uploads/2022/09/1020-60-60.jpg' alt='jungle' />
                <h1>{user.userFirstName} {user.userLastName}</h1>
                <h4><img src='' />{user.username}</h4>
                <h3>0 following</h3>
                <div className='profile-btn'>
                    <button>Share</button>
                    <button onClick={()=>{navigate("/editProfile")}}>Edit profile</button>
                </div>
                <div className='rendering-btn'>
                    <button onClick={toggleShow}>Created</button>
                    <button onClick={toggleShow}>Saved</button>
                </div>
            </div>

            <div className=''>
                {show ? <CreatedPins /> : <SavedPins />}
            </div>


        </div>
    )
}

export default UserPage
