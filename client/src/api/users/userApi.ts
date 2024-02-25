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
        console.log("Axios login username & email & password:", email, password)
        return await axios.post("/api/v1/users/login", {email, password})
        
    } catch (error) {
        console.error(error)
    }
} //work ok

export const handleGetUserByCookie = async () => {
    try {
        return await axios.post("/api/v1/users/getUserByCookie")
    } catch (error) {
        console.error(error)
    }
}

export const updateUser = async (user_id:string ,field: string, update:string | number) => {
    try {
        const response = await axios.patch(`/api/v1/users/"${user_id}"`, {field, update});
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

export const handleGetAllUsers = async () => {
    try {
        return await axios.post("/api/v1/users/admin")
    } catch (error) {
        console.error(error)
    }
}
