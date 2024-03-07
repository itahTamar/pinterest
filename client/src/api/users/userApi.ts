import axios from "axios";

export const register = async (email: string, password: string, username: string, first_name:string, last_name: string, about: string, pronouns: string, website: string) => {
    try {
        if (!email || !password || !first_name || !last_name || !username) throw new Error("Necessary information is missing at register.ts");
        return await axios.post("/api/v1/users/register", {email, password, username, first_name, last_name, about, pronouns, website})
        
    } catch (error) {
        console.error(error)
    }
} //work ok

export const login = async (email: string, password: string) => {
    try {
        if ( !email || !password) throw new Error("no username/email/password from client at register");
        return await axios.post("/api/v1/users/login", {email, password})
        
    } catch (error) {
        console.error(error)
    }
} //work ok

export const handleGetUserByCookie = async () => {
    try {
        return await axios.get("/api/v1/users/getUserByCookie")
    } catch (error) {
        console.error(error)
    }
} //work ok

export const updateUser = async (userId:string ,image: string, firstName: string, lastName: string, about: string, pronouns: string, website: string, username: string) => {
    try {
        const response = await axios.patch(`/api/v1/users/updateUser/"${userId}"`, {image, firstName, lastName, about, pronouns, website, username});
        const { ok, userData } = response.data;

        if (ok) {
           return userData
        } else {
            console.error("Error retrieving Pins:", response.data.error);
        }
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
}; //work ok

export const handleGetAllUsers = async () => {
    try {
        const response = await axios.get("/api/v1/users/admin")
        if (response.data.ok === false) {
            console.log(response.data.error)
            return response.data
        }
        return response.data
    } catch (error) {
        console.error(error)
    }
} //work ok

export const deleteUser = async (user_id: number) => {
    try {
        const response = await axios.delete(`/api/v1/users/delete-user/${user_id}`);
        const { ok, results } = response.data;
        if (ok) {
           return results
        } else {
            console.error("Error retrieving user:", response.data.error);
        }
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
}//work ok
