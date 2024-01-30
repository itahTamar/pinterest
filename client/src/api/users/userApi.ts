import axios from "axios";

export const register = async (email: string, password: string, firstName:string, lastName: string, about: string, pronouns: string, website: string, username: string) => {
    try {
        if (!email || !password || !firstName || !lastName || !username) throw new Error("Necessary information is missing at register");

        return await axios.post("/api/users/register", {email, password, firstName, lastName, about, pronouns, website, username})
        
    } catch (error) {
        console.error(error)
    }
}


export const login = async (email: string, password: string) => {
    try {
        if ( !email || !password) throw new Error("no username/email/password from client at register");
        console.log("Axios login username & email & password:", email, password)
        return await axios.post("/api/users/login", {email, password})
        
    } catch (error) {
        console.error(error)
    }
}