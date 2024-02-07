// import React from 'react'
// import { useParams } from 'react-router-dom'
import { Navbar } from '../components/Navbar/Navbar'
import { useContext, useState } from 'react'
import SavedPins from '../components/Pins/SavedPins'
import CreatedPins from '../components/Pins/CreatedPins'
import { UserContext } from '../contexts/userContext'
import { useParams } from 'react-router-dom'

const UserPage = () => {
    const [show, setShow] = useState(false)
    const { userData } = useContext(UserContext)

    const {username} = useParams()
    if (!username) throw new Error("At UserPage no username in params");
    

    console.log("at userPage username:", userData)
    
    function toggleShow() {
        setShow(!show)
    }


    return (
        <div>
            <Navbar />
            <div className='profile-wrapper'>
                <img className='userImg' src='https://www.dtapet.com/wp-content/uploads/2022/09/1020-60-60.jpg' alt='jungle' />
                <h1>{username}</h1>
                <h4><img src='' />{username}</h4>
                <h3>0 following</h3>
                <div className='profile-btn'>
                    <button>Share</button>
                    <button>Edit profile</button>
                </div>
                <div className='rendering-btn'>
                    <button onClick={toggleShow}>Created</button>
                    <button onClick={toggleShow}>Saved</button>
                </div>
            </div>

            <div className=''>
                {show ? <CreatedPins username ={username} /> : <SavedPins />}
            </div>


        </div>
    )
}

export default UserPage
