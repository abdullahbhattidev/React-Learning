import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import useAuthStore from './AuthStore'
import useTaskStore from './TaskStore'

const TaskList = () => {
  const {Tasks, Add, Delete} =useTaskStore()
  const{user}=useAuthStore()
  const navigate =  useNavigate()
  const params = useParams()
  const[searchParam, setSearchParam]= useSearchParams()
  const location = useLocation()
  return (
    <>
        <h1>Welcome {user}</h1>
        <button disabled={!user} className='btn btn-primary mx-3' onClick={()=> Add()}>Add Task</button>
        <ul>
          {user && Tasks.map((t,i)=> 
          <li className='d-flex justify-content-between' key={i}>{t.title} 
            <button  className='btn btn-danger mx-5' onClick={()=> Delete(t.id)}>Delete</button>
          </li>)}
        </ul>
        <button onClick={()=> navigate("/")} className='btn btn-primary mx-3'>Logout</button>
    </>
  )
}

export default TaskList