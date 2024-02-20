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
            return response2;
           return results
        } else {
            console.error("Error retrieving Pins:", response1.data.error);
        }
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
}; //work ok

export const getPinById = async (pin_id: string) => {
    try {
        const response = await axios.get(`/api/v1/pin/onePin/${pin_id}`);
        const { ok, results } = response.data;

        if (ok) {
            console.log("at getPinById the response.data:", response.data)
           return results
        } else {
            console.error("Error retrieving Pins:", response.data.error);
        }
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
}; //work ok

export const deletePin = async (pin_id: string) => {
    try {
        const response = await axios.delete(`/api/v1/pin/${pin_id}`);
        const { ok, results } = response.data;

        if (ok) {
          
           return results
        } else {
            console.error("Error retrieving Pins:", response.data.error);
        }
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
}; //

export const addPin = async (title:string, image: string,   description:string, link:string, user_id: string) => {
    try {
        const response = await axios.post(`/api/v1/pin/${user_id}`, {title, image,  description, link});
        const { ok, results } = response.data;

        if (ok) {
           return results
        } else {
            console.error("Error retrieving Pins:", response.data.error);
        }
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
}; //

export const updatePinById = async (pin_id:string ,field: string, update:string | number) => {
    try {
        const response = await axios.patch(`/api/v1/pin/"${pin_id}"`, {field, update});
        const { ok, results } = response.data;

        if (ok) {
           return results
        } else {
            console.error("Error retrieving Pins:", response.data.error);
        }
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
}; //

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

export const getPinsByCategory = async (category: string, username: string) => {
    try {
        const response = await axios.get(`/api/v1/pin/category/${category}?username=${username}`);
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

export const savePinToUserByUserId = async (pin_id: number | string |undefined, user_id: string) => {
    try {
        const response = await axios.post(`/api/v1/pin/favorite/${pin_id}?user_id=${user_id}`);
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