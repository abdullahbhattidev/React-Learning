import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from './AuthStore'
import { useRef } from 'react'

const LoginStatus = () => {  
  const{Login}=useAuthStore()
  const navigate = useNavigate()
  const ref = useRef<HTMLInputElement>(null)
  return (
    <div className='mx-3'>
      <form onSubmit={e=> {
           e.preventDefault();
          if(ref.current?.value==="cutie") navigate("/TaskList")
      }
      }>
        <input ref={ref} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        <button onClick={()=>Login()} className='btn btn-primary mx-3'>Login</button>
      </form>
      
    </div>
  )
}

export default LoginStatus