import useAuthStore from './AuthStore'
import useTaskStore from './TaskStore'

const TaskList = () => {
  const {Tasks, Add, Delete} =useTaskStore()
   const{user}=useAuthStore()
  return (
    <>
        <button disabled={!user} className='btn btn-primary mx-3' onClick={()=> Add()}>Add Task</button>
        <ul>
          {user && Tasks.map((t,i)=> 
          <li className='d-flex justify-content-between' key={i}>{t.title} 
            <button  className='btn btn-danger mx-5' onClick={()=> Delete(t.id)}>Delete</button>
          </li>)}
        </ul>
    </>
  )
}

export default TaskList