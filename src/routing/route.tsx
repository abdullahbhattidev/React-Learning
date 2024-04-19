import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Counter from '../statemanagement/Counter'
import LoginStatus from '../statemanagement/LoginStatus'
import TaskList from '../statemanagement/TaskList'
import Error from './error'

const router = createBrowserRouter([
    {path:'/', 
    errorElement: <Error/>,
    element: <App/>,
    children:[
        {index: true, element: <Counter/>},
        {path:'LoginStatus', element:<LoginStatus/>, children: [
            {path:'TaskList/:user', element: <TaskList/>}
        ]}
        
    ]},  
])

export default router