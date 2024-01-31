import apiClient from "./api-client";
import create from "./httpService";

export interface user {
    id: number;
    name:string;
}

export default create("/users")