import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { Data, data} from "./apiservice"
interface AddDataContext {
    previousData: Data
}

const newData = (endpoint: string) => {
    const queryClient = useQueryClient()
    return(
        useMutation<data, Error,data>({
            mutationFn:(data : data) => axios.post<data>("https://jsonplaceholder.typicode.com/" + endpoint, data)
                .then(res => res.data),
            
            onMutate: (updatedData: data)=> {
                const previousData = queryClient.getQueryData([endpoint, null,10]) || [];
                queryClient.setQueryData<Data>([endpoint, null,10], existingData => {
                    if (existingData === undefined){
                        return{
                            pages:[[updatedData]]
                        }
                    }
                    return {
                        ...existingData,
                        pages: [[updatedData, ...(existingData?.pages[0]|| [])]]
                    }
                })      
            
            },

            onSuccess: (savedData, updatedData )=> {
                //approach 1 to invalidate the cache and get updated data from the erver
                // queryClient.invalidateQueries({
                //     queryKey: [endpoint]
                // })
                //approah 2 to update the cache
                
                // Append the new data to the existing data
                
                // Update the cache with the combined data
                console.log(savedData)
                queryClient.setQueryData<Data>([endpoint, null,10], newExistingData => 
                  { 
                    if (newExistingData === undefined){
                        return{
                            pages:[[updatedData]]
                        }
                  }
                    
                    return {
                    ...newExistingData, 
                    pages: [newExistingData?.pages[0].map(data => data===updatedData? savedData: data)]
                    }
                })
            },
            onError: (error, data, context) => {
                
            }
            
        })
    )
}

export default newData