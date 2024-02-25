import { useLocation } from 'react-router-dom'
import { User } from '../types/user'

const AdminPage = () => {
    const location = useLocation()
    const {allUsers} = location.state // Access allUsers from location.state

    const handleDeletUser = async () => {
        
    }

  return (
    <>
        {allUsers && allUsers.length>0 ? 
            allUsers.map((user:User) => {
                return (
                  <div>
                    {/* <h1>{user.userFirstName} {user.userLastName}</h1> */}
                    <button onClick={handleDeletUser}>Delete user</button>
                  </div>  
                )            
                
            })
        : <p>no users</p>}
    </>
  )
}

export default AdminPage