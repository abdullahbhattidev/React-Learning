import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { data} from "./apiservice"


const newData = (endpoint: string) => {
    return(
        useMutation({
            mutationFn:(data : data) => axios.post("https://jsonplaceholder.typicode.com" + endpoint, data)
                .then(res => console.log(res.data))
        })
    )
}

export default newData