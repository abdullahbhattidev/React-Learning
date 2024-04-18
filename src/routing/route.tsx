import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import TaskList from '../statemanagement/TaskList'
import Counter from '../statemanagement/Counter'

const router = createBrowserRouter([
    {path:'/', 
    element: <App/>,
    children:[
        {index: true, element: <Counter/>},
        {path:'TaskList/:user', element: <TaskList/>}
    ]},
    
])

export default router