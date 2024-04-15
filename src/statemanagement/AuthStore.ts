import { mountStoreDevtool } from "simple-zustand-devtools"
import { create } from "zustand"

interface AuthStore{
    user: string,
    Login: ()=>void,
    Logout: ()=> void
}

const useAuthStore = create<AuthStore>(set=>({
    user:"",
    Login:()=> set({user:"Muhammad Abdullah"}),
    Logout: ()=> set({user:""})
}))
if(process.env.NODE_ENV === "development")
    mountStoreDevtool("Auth store", useAuthStore)
export default useAuthStore