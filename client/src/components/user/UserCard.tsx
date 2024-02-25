import { FC } from "react";
import { DataAdmin } from "../../types/user";
// import { deleteUser } from "../../api/users/userApi";
// import { useNavigate } from "react-router-dom";

interface DataProp {
  data: DataAdmin;
}

const UserCard: FC<DataProp> = ({ data }) => {
    // const navigate = useNavigate() 

//   const handleDeleteUser = async () => {};
//   if (data.user_id === undefined)
//     throw new Error("At handleDeleteUser, user_id is undefined");
//   try {
//     const response = deleteUser(data.user_id);
//     console.log("At handleDeleteUser response is: ", response);
//     navigate("/admin");
//   } catch (error) {
//     console.error("Error fetching specific book:", error);
//   }

  return (
    <div>
      <table>
        <tr>
          <th>{data.first_name}</th>
          <th>{data.last_name}</th>
          <th>{data.username}</th>
          {/* <th>
            <button key={data.user_id} onClick={handleDeleteUser}>
              Delete
            </button>
          </th> */}
        </tr>
      </table>
    </div>
  );
};

export default UserCard;
