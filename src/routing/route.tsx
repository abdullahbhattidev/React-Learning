import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import TaskList from '../statemanagement/TaskList'
import Counter from '../statemanagement/Counter'
import LoginStatus from '../statemanagement/LoginStatus'

const router = createBrowserRouter([
    {path:'/', 
    element: <App/>,
    children:[
        {index: true, element: <Counter/>},
        {path:'LoginStatus', element:<LoginStatus/>, children: [
            {path:'TaskList/:user', element: <TaskList/>}
        ]}
        
    ]},
    
])

export default router