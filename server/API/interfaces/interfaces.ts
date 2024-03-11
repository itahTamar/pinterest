export interface User {
    user_id?: number,
     email: string,
     password: string,
     username: string,
     role: "admin" | " "
 }
 export interface Results {
    "fieldCount": number,
    "affectedRows": number,
    "insertId": number,
    "info": string,
    "serverStatus": number,
    "warningsStatus": number,
    "changedRows": number,
    "length": number,
}