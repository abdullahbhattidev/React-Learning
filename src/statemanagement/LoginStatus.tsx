import React, { useReducer } from 'react'
import loginStatusReducer from './loginStatusReducer'
import TaskList from './TaskList'

const LoginStatus = () => {
  const [status, dispatch]= useReducer(loginStatusReducer,"")
  if(!status)
  return (
    <div>
        <a onClick={()=> dispatch({type:"LOGIN"}) } href='#'>Login</a>
    </div>
  )
  return (
    <div>
        <div>
            <span>{status}</span>
            <a onClick={()=> dispatch({type:"LOGOUT"}) } href='#'>Logout</a>
        </div>
        <TaskList/>
    </div>
  )
}

export default LoginStatus