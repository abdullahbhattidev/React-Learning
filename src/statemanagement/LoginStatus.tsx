import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthStore from './AuthStore'
import useTaskStore from './TaskStore'

const LoginStatus = () => {  
  const{user,Login}=useAuthStore()
  const navigate = useNavigate()
  const ref = useRef<HTMLInputElement>(null)
  const Tasks =useTaskStore(s=> s.Tasks);
  return (
    <div className= 'd-flex justify-content-between mx-3 '>
      <div className='mx-3 '>
          <span>{Tasks.length}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
          </svg>
      </div>
      
      <form className=" d-flex form-group" onSubmit={e=> {
           e.preventDefault();
          if(ref.current?.value===user) navigate(`/TaskList/${user}`)
      }
      }>
        <input ref={ref} type="password" className='form-control'  placeholder="Password"/>
        <button onClick={()=>{if(ref.current)Login(ref.current?.value)}} className='btn btn-primary m-0 pt-0'>Login</button>
      </form>
      
    </div>
  )
}

export default LoginStatus