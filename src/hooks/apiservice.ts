import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import axios, { all } from "axios"

export interface data {
    userId?: number,
    title?: string,
    id? : number
    completed?: boolean
}
export interface Data {
    pages: {
        0:[]
    }
}
export interface querydata {
    endpoint: string,
    userId?: number | undefined,
    pageSize: number,
}
const apiTodo = ({endpoint, userId, pageSize}: querydata) => {
    return (
        useInfiniteQuery<data[], Error>({
        queryKey:[endpoint, userId, pageSize],
        queryFn: ({pageParam = 1}) => axios.get<data[]>("https://jsonplaceholder.typicode.com/" + endpoint, {
            params: {
                userId,
                _start: (pageParam - 1)* pageSize,
                _limit: pageSize
            }
        })
        .then(res => res.data),
        keepPreviousData: true,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length > 0? allPages.length+1: "last page"
        }
    }))
}
export default apiTodo