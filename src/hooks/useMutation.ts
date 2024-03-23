import { InfiniteData, useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { Data, data} from "./apiservice"


const newData = (endpoint: string) => {
    const queryClient = useQueryClient()
   
    return(
        useMutation({
            mutationFn:(data : data) => axios.post<data>("https://jsonplaceholder.typicode.com/" + endpoint, data)
                .then(res => res.data),
            onSuccess: (savedData, updatedData )=> {
                //approach 1 to invalidate the cache and get updated data from the erver
                // queryClient.invalidateQueries({
                //     queryKey: [endpoint]
                // })
                //approah 2 to update the cache
                
                // Append the new data to the existing data
                
                // Update the cache with the combined data
                queryClient.setQueryData<Data| undefined>([endpoint, null,10], existingData => {
                    if (!existingData){
                        return{
                            pages:[[savedData]]
                        }
                    }
                    return {
                        ...existingData,
                        pages: [[savedData, ...(existingData?.pages[0]|| [])]]
                    }
                })   
            }
        })
    )
}

export default newData