import { useReducer } from 'react'
import loginStatusReducer from './loginStatusReducer'

const LoginStatus = () => {
  const [status, dispatch]= useReducer(loginStatusReducer,"")
  if(!status)
  return (
    <div className='mx-3'>
        <a onClick={()=> dispatch({type:"LOGIN"}) } href='#'>Login</a>
    </div>
  )
  return (
    <div className='mx-3'>
      <span className='mx-3'>{status}</span>
      <a  onClick={()=> dispatch({type:"LOGOUT"}) } href='#'>Logout</a>
    </div>
  
  )
}

export default LoginStatus