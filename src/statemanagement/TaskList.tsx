import { useContext } from 'react'
import taskContext from './context/TaskContext'
import AuthContext from './context/loginStatusContext'

const TaskList = () => {
   const {tasks, taskdispatch}=useContext(taskContext)
   const {status, authdispatch}=useContext(AuthContext)
  return (
    <>
        <button disabled={!status} className='btn btn-primary mx-3' onClick={()=> taskdispatch({type: "ADD"})}>Add Task</button>
        <ul>
          {status && tasks.map((t,i)=> 
          <li className='d-flex justify-content-between' key={i}>{t.title} 
            <button  className='btn btn-danger mx-5' onClick={()=> taskdispatch({type:"DELETE", taskid: t.id})}>Delete</button>
          </li>)}
        </ul>
    </>
  )
}

export default TaskList