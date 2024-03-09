import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DataAdmin } from "../types/user";
import UserCard from "../components/user/UserCard/UserCard";
import { deleteUser } from "../api/users/userApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import './AdminPage.scss'

const AdminPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { dataAdmin } = location.state; // Access allUsers from location.state
  const [users, setUsers] = useState<DataAdmin[]>(dataAdmin || []);

  const handleDeleteUser = async (userId: number) => {
    try {
      await deleteUser(userId);
      setUsers(users.filter((user) => user.user_id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <>
      <div className="homepage"
        onClick={() => {
          navigate(`/main/homepage`);
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <h2>admin page</h2>
      <div className="userCards">
      {users.length > 0 ? (
        users.map((data: DataAdmin) => (
          <div key={data.user_id}>
            <UserCard
              data={data}
              onDelete={() => handleDeleteUser(data.user_id)}
            />
          </div>
        ))
      ) : (
        <p>No users</p>
      )}
      </div>
    </>
  );
};

export default AdminPage;
