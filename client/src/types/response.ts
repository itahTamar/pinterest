export interface Response {
    "ok": true | false,
    "results": {
        "fieldCount": number,
        "affectedRows": number,
        "insertId": number,
        "info": string,
        "serverStatus": number,
        "warningStatus": number,
        "changedRows": number,
    }
}