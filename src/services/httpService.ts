import apiClient from "./api-client";

interface entity{
    id:number
}

class httpServices {
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint;
    }
    getAll<T>() {
        const controller = new AbortController();
        const request = apiClient.get<T[]>(this.endpoint, {signal: controller.signal})
        return ({request, cancel: () => controller.abort() })
    }

    delete<T extends entity>(entity: T){
       const deletion =  apiClient.delete(this.endpoint +"/" + entity.id )
        return deletion
    }

    post<T>(entity: T) {
       
        const post = apiClient.post(this.endpoint , entity)
        return post
    }

    update<T extends entity>(entity:T) {
        const updateVersion = {name: name + " Bhatti"}
        const update = apiClient.patch(this.endpoint +"/" + entity.id , updateVersion)
        return update
    }
}

const create = (endpoint:string) => new httpServices(endpoint)
export default create