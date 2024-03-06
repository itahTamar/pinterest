import { FC, useState } from "react";
import { DataAdmin } from "../../../types/user";
import { deleteUser } from "../../../api/users/userApi";
import "./UserCard.scss";
//for admin only
interface DataProp {
  data: DataAdmin;
  onDelete: () => void; // Function to trigger parent component update
}

const UserCard: FC<DataProp> = ({ data, onDelete }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteUser = async () => {
    setIsLoading(true);
    try {
      await deleteUser(data.user_id);
      onDelete(); // Trigger parent component update after successful delete
    } catch (error) {
      console.error("Error deleting user:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <div className="user">
              <div>
                <div className="divname">
                  <p>Name: {data.first_name}</p>
                  <p> {data.last_name}</p>
                </div>
                <p>Username: {data.username}</p>
              </div>
              <div>
                <button disabled={isLoading} onClick={handleDeleteUser}>
                  {isLoading ? "Deleting..." : "🗑"}
                </button>
              </div>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserCard;
