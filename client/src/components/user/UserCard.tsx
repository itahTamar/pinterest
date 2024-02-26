import { FC, useState } from "react";
import { DataAdmin } from "../../types/user";
import { deleteUser } from "../../api/users/userApi";

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
            <th>{data.first_name}</th>
            <th>{data.last_name}</th>
            <th>{data.username}</th>
            <th>
              <button
                disabled={isLoading}
                onClick={handleDeleteUser}
              >
                {isLoading ? "Deleting..." : "Delete 🗑"}
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserCard;
