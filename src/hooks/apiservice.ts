import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export interface data {
    title?: string
}
const apiTodo = (endpoint : string) => {
    return (useQuery<data[], Error>({
        queryKey: ['todos'], 
        queryFn: () => axios.get<data[]>("https://jsonplaceholder.typicode.com" + endpoint)
                            .then(res => res.data),
        staleTime: 10 * 1000
    }))
}
export default apiTodo