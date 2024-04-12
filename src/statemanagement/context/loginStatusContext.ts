import { Dispatch } from "react"
import { AuthAction } from "../loginStatusReducer"
import React from "react"

export interface AuthContextType{
    status: string,
    authdispatch: Dispatch<AuthAction>
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType)

export default AuthContext