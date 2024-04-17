import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthStore from './AuthStore'

const LoginStatus = () => {  
  const{user,Login}=useAuthStore()
  const navigate = useNavigate()
  const ref = useRef<HTMLInputElement>(null)
  return (
    <div className='mx-3'>
      <form onSubmit={e=> {
           e.preventDefault();
          if(ref.current?.value===user) navigate(`/TaskList/${user}`)
      }
      }>
        <input ref={ref} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        <button onClick={()=>{if(ref.current)Login(ref.current?.value)}} className='btn btn-primary mx-3'>Login</button>
      </form>
      
    </div>
  )
}

export default LoginStatus