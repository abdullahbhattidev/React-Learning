import { useContext, useReducer } from 'react'
import loginStatusReducer from './loginStatusReducer'
import AuthContext from './context/loginStatusContext'

const LoginStatus = () => {
  const {status,authdispatch}=useContext(AuthContext)
  if(!status)
  return (
    <div className='mx-3'>
        <a className = "text-white"  onClick={()=> authdispatch({type:"LOGIN"}) } href='#'>Login</a>
    </div>
  )
  return (
    <div className='mx-3'>
      <span className='mx-3'>{status}</span>
      <a  className = "text-white" onClick={()=> authdispatch({type:"LOGOUT"}) } href='#'>Logout</a>
    </div>
  
  )
}

export default LoginStatus