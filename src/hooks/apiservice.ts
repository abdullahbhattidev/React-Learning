import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export interface data {
    title?: string
}
const apiTodo = (endpoint : string , userId: number | undefined) => {
    return (useQuery<data[], Error>({
        queryKey: userId? ['users', userId, endpoint] : [endpoint],
        queryFn: () => axios.get<data[]>("https://jsonplaceholder.typicode.com" + endpoint, {
            params: {
                userId
            }
        })
                            .then(res => res.data),
        staleTime: 10 * 1000
    }))
}
export default apiTodo