import React from 'react'
import "./DropDownMenu.scss"
import { useNavigate } from 'react-router-dom'

export const DropDownMenu = () => {
  const navigate = useNavigate()
  return (
    <div className="DropDownMenu">
        <ul>
            <p>Your accounts</p>
            <button>Add account</button>
            <p>More options</p>
            <button onClick={()=>{navigate(`/main/editProfile`)}}>Edit profile</button>
            <button>Log out</button>
        </ul>
    </div>
  )
}
