import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { data } from "../services/apiClient";
import { Data } from "./useInfiniteQuery";
import httpServicesTodos from "../services/httpServicesTodos";
import httpServicesPosts from "../services/httpServicesPosts";

interface AddDataContext {
    previousData: Data | undefined;
}

const newData = (endpoint: string) => {
    const queryClient = useQueryClient();
    return useMutation<data, Error, data, AddDataContext>({
        mutationFn: (data: data) => endpoint === "todos"? httpServicesTodos.post(data) : httpServicesPosts.post(data),
        onMutate: (updatedData: data) => {
            const previousData = queryClient.getQueryData<Data>([endpoint, null, 10]);
            queryClient.setQueryData<Data | undefined>([endpoint, null, 10], existingData => {
                if (!existingData) {
                    return { pages: [[updatedData]] };
                }
                return {
                    ...existingData,
                    pages: [[updatedData, ...(existingData.pages[0] || [])]]
                };
            });
            return { previousData };
        },

        onSuccess: (savedData, updatedData) => {
            //approach 1 to invalidate the cache and get updated data from the erver
                // queryClient.invalidateQueries({
                //     queryKey: [endpoint]
                // })
                //approah 2 to update the cache
                
                // Append the new data to the existing data
                
                // Update the cache with the combined data
            queryClient.setQueryData<Data | undefined>([endpoint, null, 10], (existingData) => {
                if (!existingData) {
                    return { pages: [[savedData]] };
                }
                return {
                    ...existingData,
                    pages: [existingData.pages[0].map((d: data) => d.id === updatedData.id ? savedData : d)]
                };
            });
        },
       
        onError: (error, data, context) => {
            if (!context) return;
            queryClient.setQueryData<Data | undefined>([endpoint, null, 10], context.previousData);
        }
    });
};

export default newData;
