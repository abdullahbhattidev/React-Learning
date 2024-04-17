import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import TaskList from '../statemanagement/TaskList'

const router = createBrowserRouter([
    {path:'/', element: <App/>},
    {path:'/TaskList', element: <TaskList/>}
])

export default router