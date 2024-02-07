import axios from "axios";

export const getAllUserSavedPinsByUserId = async (user_id: string) => {
    try {
        const response = await axios.get(`/api/v1/pin/saved/${user_id}`);
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

export const getPinById = async (pinId: string) => {
    try {
        const response = await axios.get(`/api/v1/pin/${pinId}`);
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

export const addPin = async (image: string, title:string,  description:string, link:string, user_id: string) => {
    try {
        const response = await axios.post(`/api/v1/pin/addPin/${user_id}`, {image, title, description, link});
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

export const getAllOtherUsersPins = async (user_id: string) => {
    try {
        const response = await axios.get(`/api/v1/pin/${user_id}`);
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