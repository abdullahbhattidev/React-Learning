import { useInfiniteQuery } from "@tanstack/react-query"
import axios from "axios"
import httpServicesTodos from "../services/httpServicesTodos"
import { data } from "../services/apiClient"


export interface Data {
    pages: data[][]
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
        queryFn: ({pageParam = 1}) => httpServicesTodos.getAll({
            params: {
                userId,
                _start: (pageParam - 1)* pageSize,
                _limit: pageSize
            }
        }),
        keepPreviousData: true,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length > 0? allPages.length+1: "last page"
        }
    }))
}
export default apiTodo