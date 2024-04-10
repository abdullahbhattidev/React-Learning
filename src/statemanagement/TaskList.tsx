import React, { useReducer } from 'react'
import taskReducer from './taskReducer'
import { Task } from './taskReducer'

const TaskList = () => {
   const[tasks, dispatch]=useReducer(taskReducer,[])
  return (
    <>
        <button className='btn btn-primary' onClick={()=> dispatch({type: "ADD"})}>Add Task</button>
        <ul>
          {tasks.map((t,i)=> 
          <li className='d-flex justify-content-between' key={i}>{t.title} 
            <button className='btn btn-danger mx-5' onClick={()=> dispatch({type:"DELETE", taskid: t.id})}>Delete</button>
          </li>)}
        </ul>
    </>
  )
}

export default TaskList