import axios from "axios";

interface PinId {
    pin_id: string; 
}

export const getAllUserSavedPinsByUserId = async (user_id: string) => {
    try {
        const response1 = await axios.get(`/api/v1/pin/saved/${user_id}`);
        const { ok, results } = response1.data;
        console.log("at getAllUserSavedPinsByUserId in pinAIP results:", results)
        console.log("at getAllUserSavedPinsByUserId in pinAIP results[0].pin_id:", results[0].pin_id)

         if (ok) {
            const response2 = await Promise.all(results.map((result:PinId) => getPinById(result.pin_id)));
            console.log("at getAllUserSavedPinsByUserId in pinAIP response2:", response2)
            return response2;
        } else {
            console.error("Error retrieving Pins:", response1.data.error);
        }
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
}; //work ok

export const getPinById = async (pin_id: string) => {
    try {
        console.log("at getPinById the pin_id:", pin_id)

        const response = await axios.get(`/api/v1/pin/onePin/${pin_id}`);
        const { ok, results } = response.data;

        if (ok) {
            console.log("at getPinById the response.data:", response.data)
            console.log("at getPinById the results[0]:", results[0])

           return results[0]
        } else {
            console.error("Error retrieving Pins:", response.data.error);
        }
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
}; //work ok work ok

export const deletePin = async (pin_id: string) => {
    try {
        const response = await axios.delete(`/api/v1/pin/${pin_id}`);
        const { ok } = response.data;

        if (ok) {
          
           return ok
        } else {
            console.error("Error retrieving Pins:", response.data.error);
        }
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
}; //work ok

export const addPin = async (title:string, image: string, description:string, link:string, board: string, user_id: string) => {
    try {
        console.log("at pinaApi addPin the data:", user_id, title, image, description, link, board)
        const response = await axios.post(`/api/v1/pin/${user_id}`, {title, image, description, link, board});
        console.log("at pinaApi addPin the response.data:", response.data)
        const { ok } = response.data;

        if (ok) {
           return ok
        } else {
            console.error("Error retrieving Pins:", response.data.error);
        }
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
}; //work ok

export const EditPinById = async (pin_id:string ,title: string, description:string, link: string, board: string) => {
    try {
        const response = await axios.patch(`/api/v1/pin/"${pin_id}"`, {title, description, link, board});
        console.log("at pinapi EditPinById the response:", response)
        console.log("at pinapi EditPinById the response.data:", response.data)
        const { ok, results2 } = response.data;

        if (ok) {
           return results2
        } else {
            console.error("Error retrieving Pins:", response.data.error);
        }
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
}; //work ok

//get all other users pin by username
export const getAllOtherUsersPinsByUsername = async (username: string) => {
    try {
        const response = await axios.get(`/api/v1/pin/others/${username}`);
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

export const getAllUserCreatedPinsByUsername = async (username: string) => {
    try {
        const response = await axios.get(`/api/v1/pin/created/${username}`);
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

//get all pin that the user did not create by category 
export const getPinsByCategory = async (category: string, username: string, pin_id: string) => {
    try {
        const response = await axios.get(`/api/v1/pin/category/${category}?username=${username}&pin_id=${pin_id}`);
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

//sent only 3 pins to render
export const getPinsByCategory2 = async (category: string, username: string) => {
    try {
        const response = await axios.get(`/api/v1/pin/category2/${category}?username=${username}`);
        const { ok, results } = response.data;
        console.log("results in getPinsByCategory2:", results)
        if (ok) {
            if (results.length > 3) {
                const results3 = [results[0], results[1], results[2]]
                return results3
            }
           return results
        } else {
            console.error("Error retrieving Pins:", response.data.error);
        }
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
}; //work ok

//get all the pin in the same category
export const getPinsByCategory3 = async (category: string, username: string) => {
    try {
        const response = await axios.get(`/api/v1/pin/category2/${category}?username=${username}`);
        const { ok, results } = response.data;
        console.log("results in getPinsByCategory2:", results)
        if (ok) {
           return results
        } else {
            console.error("Error retrieving Pins:", response.data.error);
        }
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
}; //work ok

export const savePinToUserByUserId = async (pin_id: number | string |undefined, user_id: string) => {
    try {
        const response = await axios.post(`/api/v1/pin/favorite/${pin_id}?user_id=${user_id}`);
        const { ok, results } = response.data;
        console.log("at savePin the response.data:", response.data)
        if (ok) {
           return results
        } else {
            console.error("Error retrieving Pins:", response.data.error);
        }
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
}; //work ok

export const findTitleAtOtherUsersPins = async (username: string, text: string) => {
    try {
        console.log("at findTitleAtOtherUsersPins client-side the username:", username)
        console.log("at findTitleAtOtherUsersPins client-side the text:", text)

        const response = await axios.get(`/api/v1/pin/findOther/${username}/?text=${text}`);
        console.log("at findTitleAtOtherUsersPins client-side the response:", response)
        console.log("at findTitleAtOtherUsersPins client-side the response.data:", response.data)

        const { ok, results } = response.data;

        if (ok) {
            console.log("at findTitleAtOtherUsersPins client-side the results:", results)

           return results
        } else {
            console.error("Error retrieving Pins:", response.data.error);
        }
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
}; //work ok

// export const findTitleAtUserSavedPinsByUserId = async (user_id: string, text: string) => {
//     try {
//         const response = await axios.get(`/api/v1/pin/findSaved/${user_id}/?text=${text}`);
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