import useAuthStore from './AuthStore'

const LoginStatus = () => {  
  const{user, Login,Logout}=useAuthStore()
  if(!user)
  return (
    <div className='mx-3'>
        <a className = "text-white"  onClick={()=> Login()} href='#'>Login</a>
    </div>
  )
  return (
    <div className='mx-3'>
      <span className='mx-3'>{user}</span>
      <a  className = "text-white" onClick={()=> Logout() } href='#'>Logout</a>
    </div>
  
  )
}

export default LoginStatus