import { useLocation, useNavigate } from "react-router-dom";
import { DataAdmin } from "../types/user";
import UserCard from "../components/user/UserCard";
import { deleteUser } from "../api/users/userApi";

const AdminPage = () => {
  const navigate = useNavigate() 
  const location = useLocation();
  const { dataAdmin } = location.state; // Access allUsers from location.state

  const handleDeleteUser = async () => {};
  if (dataAdmin.user_id === undefined)
    throw new Error("At handleDeleteUser, user_id is undefined");
  try {
    const response = deleteUser(dataAdmin.user_id);
    console.log("At handleDeleteUser response is: ", response);
    navigate("/admin");
  } catch (error) {
    console.error("Error fetching specific book:", error);
  }

  return (
    <>
      {dataAdmin && dataAdmin.length > 0 ? (
        dataAdmin.map((data: DataAdmin) => {
          return (
            <div>
              <UserCard data={data} />
              <button key={data.user_id} onClick={handleDeleteUser}> Delete </button>
            </div>
          );
        })
      ) : (
        <p>no users</p>
      )}
    </>
  );
};

export default AdminPage;
