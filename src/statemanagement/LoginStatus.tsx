import { useRef } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import useAuthStore from './AuthStore'
import useTaskStore from './TaskStore'

const LoginStatus = () => {  
  const{user,Login}=useAuthStore()
  const navigate = useNavigate()
  const ref = useRef<HTMLInputElement>(null)
  return (
    <>
      <div className= 'm-3' style={{width: '20rem'}}>      
        <form className="d-flex form-group" onSubmit={e=> {
            e.preventDefault();
            if(ref.current?.value===user) {
              navigate(`TaskList/${user}`);
              ref.current.value= ""
          }
        }
        }>
          <input ref={ref} type="password" className='form-control'  placeholder="Password"/>
          <button onClick={()=>{if(ref.current)Login(ref.current?.value)}} className='btn btn-primary m-0 pt-0'>Login</button>
        </form>
      </div>
      <Outlet/>
    </>
    
  )
}

export default LoginStatus