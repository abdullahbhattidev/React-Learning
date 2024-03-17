import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export interface data {
    title?: string,
    id? : string
}

interface querydata {
    endpoint: string,
    userId: number | undefined
    pageSize: number;
    pageNo: number
}
const apiTodo = ({endpoint, userId, pageSize, pageNo}: querydata) => {
    return (useQuery<data[], Error>({
        queryKey: userId? ['users', userId, endpoint] : [endpoint],
        queryFn: () => axios.get<data[]>("https://jsonplaceholder.typicode.com" + endpoint, {
            params: {
                userId,
                _start: (pageNo - 1)* pageSize,
                _limit: pageSize
            }
        })
        .then(res => res.data),
        keepPreviousData: true
    }))
}
export default apiTodo