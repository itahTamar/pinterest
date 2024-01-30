// import React from 'react'
import { useParams } from 'react-router-dom'
import { Navbar } from '../components/Navbar/Navbar'
import { useState } from 'react'
import SavedPins from '../components/Pins/SavedPins'
import CreatedPins from '../components/Pins/CreatedPins'

const UserPage = () => {
    const [show, setShow] = useState(false)
    let { username } = useParams()

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
                <h3>number of following</h3>
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
                {show ? <SavedPins /> : <CreatedPins />}
            </div>


        </div>
    )
}

export default UserPage
