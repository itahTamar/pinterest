import "./DropDownMenu.scss"
import { useNavigate } from 'react-router-dom'

export const DropDownMenu = () => {
  const navigate = useNavigate()
  return (
    <div className="DropDownMenu">
        <ul>
            <p>Your accounts</p>
            <div onClick={()=>{navigate("/register")}}>Add account</div>
            <p>More options</p>
            <div onClick={()=>{navigate(`/main/editProfile`)}}>Edit profile</div>
            <div onClick={()=>{navigate('/')}}>Log out</div>
        </ul>
    </div>
  )
}
