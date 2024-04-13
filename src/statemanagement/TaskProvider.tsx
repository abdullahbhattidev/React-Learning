import React, { ReactNode, useReducer } from 'react'
import taskReducer from './taskReducer'
import taskContext from './context/TaskContext'

interface props{
    children: ReactNode
}
const TaskProvider = ({children}: props) => {

    const[tasks, dispatch]=useReducer(taskReducer,[])
    return (
      <taskContext.Provider value={{tasks, dispatch}}>
          {children}
      </taskContext.Provider>
    )
}

export default TaskProvider