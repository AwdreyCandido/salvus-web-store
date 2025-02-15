import axios from "axios";

export function getApiClient() {
    const API = axios.create({
        baseURL: "https://web-store-express-api.vercel.app/api/v1",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT, DELETE",
        },
    })


    return API
}