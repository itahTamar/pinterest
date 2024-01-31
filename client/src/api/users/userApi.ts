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