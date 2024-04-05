import axios from "axios";

export interface data {
    userId?: number,
    title?: string,
    id? : number,
    completed?: boolean
}
const axiosInstant = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
})
class APIClient<data> {
    endpoint: string;
    constructor(endpoint:string) {
        this.endpoint = endpoint
    }

    getAll = (T: {}) => {
       return axiosInstant.get(this.endpoint, T)
                          .then(res => res.data)
    }

    post = (T: {}) => {
        return axiosInstant.post(this.endpoint, T)
                           .then(res => res.data)
    }
}
export default APIClient