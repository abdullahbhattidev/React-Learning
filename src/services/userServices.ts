import apiClient from "./api-client";

export interface user {
    id: number;
    name:string;
}

export const newUser = {
    id: 0,
    name: "Abdullah"
};

class userServices {
    getAllUsers() {
        const controller = new AbortController();
        const request = apiClient.get<user[]>("/users", {signal: controller.signal})
        return ({request, cancel: () => controller.abort() })
    }

    deleteUser({id,name}: user){
       const deletion =  apiClient.delete("/users/" + id )
        return deletion
    }

    postNewUser () {
       
        const post = apiClient.post("/users" , newUser)
        return post
    }

    updateUser ({id,name}: user) {
        const updateVersion = {name: name + " Bhatti"}
        const update = apiClient.patch("/users/" + id, updateVersion)
        return update
    }
}

export default new userServices()