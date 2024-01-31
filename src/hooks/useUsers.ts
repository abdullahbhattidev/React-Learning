import { useEffect, useState } from "react";
import userServices, { user } from "../services/userServices";
import { CanceledError } from "../services/api-client";

const useUsers = () =>  {
    const [users, setusers]= useState<user[]>([])
    const [error,seterror]=useState("")
    const [isLoading,setIsLoading] = useState(false)

    useEffect(()=> {
        setIsLoading(true);
        const {request, cancel}= userServices.getAll<user>();
        request
        .then(res => {
        setusers(res.data);
        setIsLoading(false)})

        .catch(err=> {
        if(err instanceof CanceledError) return; 
        seterror(err.message);
        setIsLoading(false);
        })
        //the finally method does not work in strict mode so we did duplication of setislodaing in try and catch
        // .finally(()=> {
        //   setIsLoading(false)
        // });
        

        return cancel
    }, [])

    return {users, error, isLoading, setusers, seterror}
}
export default useUsers
