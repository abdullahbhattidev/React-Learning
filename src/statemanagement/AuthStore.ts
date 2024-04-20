import { mountStoreDevtool } from "simple-zustand-devtools"
import { create } from "zustand"

interface AuthStore{
    user: string,
    Auth: boolean
    Login: (InputUser:string)=>void,
}

const useAuthStore = create<AuthStore>(set=>({
    user:"",
    Auth: true,
    Login:(InputUser)=> set({user:InputUser}),
}))
if(process.env.NODE_ENV === "development")
    mountStoreDevtool("Auth store", useAuthStore)
export default useAuthStore