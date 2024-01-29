// import React from 'react'
import { useParams } from 'react-router-dom'
import { Navbar } from '../components/Navbar/Navbar'

const userPage = () => {
    let { username } = useParams()


    return (
        <div>
            <Navbar />
            <div className='profile-wrapper'>
                <img className='userImg' src='https://www.dtapet.com/wp-content/uploads/2022/09/1020-60-60.jpg' alt='jungle' />
                <h1>{username}</h1>
                <h4><img src='' />pinterst user nickname&number</h4>
                <h3>number of following</h3>
                <div className='profile-btn'>
                    <button>Share</button>
                    <button>Edit profile</button>
                </div>
                <div className='rendering-btn'>
                    <button>Created</button>
                    <button>Saved</button>
                </div>
            </div>
            <div className='navbar3'>
                {/* <Navbar3/> sort at left / add at right */}
            </div>
            <div className='boards'></div>
            <div className='user-pins'>
                <h2>Unorganized ideas</h2>
                <button>Organize</button>
                render all user's pins
            </div>
        </div>
    )
}

export default userPage
