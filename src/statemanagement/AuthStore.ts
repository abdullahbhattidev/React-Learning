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

export default useAuthStore