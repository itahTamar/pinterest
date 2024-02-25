import { useLocation } from 'react-router-dom'
import { User } from '../types/user'

const AdminPage = () => {
    const location = useLocation()
    const {allUsers} = location.state // Access allUsers from location.state

    const handleDeleteUser = async () => {
        
    }

  return (
    <>
        {allUsers && allUsers.length>0 ? 
            allUsers.map((user:User) => {
                return (
                  <div>
                    {/* <h1>{user.userFirstName} {user.userLastName}</h1> */}
                    <button onClick={handleDeleteUser}>Delete user</button>
                  </div>  
                )            
                
            })
        : <p>no users</p>}
    </>
  )
}

export default AdminPage