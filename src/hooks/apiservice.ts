import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export interface todos {
    title?: string
}
const apiTodo = () => {
    return (useQuery<todos[], Error>({
        queryKey: ['todos'], 
        queryFn: () => axios.get<todos[]>("https://jsonplaceholder.typicode.com/todos")
                            .then(res => res.data),
        staleTime: 10 * 1000
    }))
}
export default apiTodo