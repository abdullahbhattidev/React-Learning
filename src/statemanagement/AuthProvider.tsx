import React, { ReactNode, useReducer } from 'react'
import loginStatusReducer from './loginStatusReducer'
import AuthContext from './context/loginStatusContext'

interface props{
    children: ReactNode
}

const AuthProvider = ({children}: props) => {
const [status, dispatch]= useReducer(loginStatusReducer,"")
  return (
    <AuthContext.Provider value={{status, dispatch}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider