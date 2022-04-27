import axios, { Method } from "axios";

const API_URL = process.env.REACT_APP_API_URL;


export default class httpClient {

    private _httpClient;
    constructor() {
        this._httpClient = axios.create({
            baseURL: API_URL
        })
    }


    async request(type: string, endpoint: string, body?: any){
        console.log('a', API_URL);
        console.log('b', endpoint);
        try {
            return await this._httpClient.request({
                method: (type as Method),
                url: API_URL + endpoint,
                data: body || {}
            })
        }
        catch {

        }
    }
}