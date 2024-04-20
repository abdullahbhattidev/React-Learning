import { useRef } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import useAuthStore from './AuthStore'
import PrivateRoute from '../routing/privateRoute';

const LoginStatus = () => {  
  const{user,Login}=useAuthStore();
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      <div className= 'm-3' style={{width: '20rem'}}>      
        <form className="d-flex form-group" onSubmit={e=> {
            e.preventDefault();
            navigate("TaskList")
        }
        }>
          <input ref={ref} type="password" className='form-control'  placeholder="Password"/>
          <button onClick={()=>{if(ref.current)Login(ref.current?.value); navigate("TaskList")}} className='btn btn-primary m-0 pt-0'>Login</button>
        </form>
      </div>
      <Outlet/>
    </>
    
  )
}

export default LoginStatus