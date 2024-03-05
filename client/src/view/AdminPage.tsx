import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DataAdmin } from "../types/user";
import UserCard from "../components/user/UserCard/UserCard";
import { deleteUser } from "../api/users/userApi";

const AdminPage = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const { dataAdmin } = location.state; // Access allUsers from location.state
  const [users, setUsers] = useState<DataAdmin[]>(dataAdmin || []);

  const handleDeleteUser = async (userId: number) => {
    try {
      await deleteUser(userId);
      setUsers(users.filter(user => user.user_id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <>
    <button onClick={() => { navigate(`/main/homepage`) }}>Back to Home Page</button>
      {users.length > 0 ? (
        users.map((data: DataAdmin) => (
          <div key={data.user_id}>
            <UserCard data={data} onDelete={() => handleDeleteUser(data.user_id)} />
          </div>
        ))
      ) : (
        <p>No users</p>
      )}
    </>
  );
};

export default AdminPage;
