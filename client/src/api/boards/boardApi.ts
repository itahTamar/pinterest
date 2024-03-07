import axios from "axios";

export const getAllUsersBoards = async (user_id: string) => {
    try {
        const response = await axios.get(`/api/v1/board/getAllUsersBoards/${user_id}`);
        const { ok, results } = response.data;

        if (ok) {
           return results
        } else {
            console.error("Error retrieving Pins:", response.data.error);
        }
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
}; //work ok

export const gelAllOtherBoardsById = async (userId: string) => {
    try {
        const response = await axios.get(`/api/v1/board/getAllOtherUsersBoards/${userId}`);
        const { ok, results } = response.data;

        if (ok) {
           return results
        } else {
            console.error("Error retrieving Pins:", response.data.error);
        }
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
}; 

// export const addOneBoard = async (user_id: string, title: string) => {
//     try {
//         const response = await axios.post(`/api/v1/board/${user_id}`, {title});
//         const { ok, results } = response.data;

//         if (ok) {
//            return results
//         } else {
//             console.error("Error retrieving Pins:", response.data.error);
//         }
//     } catch (error) {
//         console.error("Error:", (error as Error).message);
//     }
// };
