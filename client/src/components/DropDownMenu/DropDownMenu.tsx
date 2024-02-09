import React from 'react'
import "./DropDownMenu.scss"

export const DropDownMenu = () => {
  return (
    <div className="DropDownMenu">
        <ul>
            <p>Your accounts</p>
            <button>Add account</button>
            <p>More options</p>
            <button>Edit profile</button>
            <button>Log out</button>
        </ul>
    </div>
  )
}
