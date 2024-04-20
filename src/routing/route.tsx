import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Counter from '../statemanagement/Counter'
import LoginStatus from '../statemanagement/LoginStatus'
import TaskList from '../statemanagement/TaskList'
import Error from './error'
import PrivateRoute from './privateRoute'

const router = createBrowserRouter([
    {path:'/', 
    errorElement: <Error/>,
    element: <App/>,
    children:[
        {index: true, element: <Counter/>},  
    ]},
    {
        element:<PrivateRoute/>,
        children:[
            {path:'LoginStatus', element:<LoginStatus/>, children:[
                {path:'TaskList', element: <TaskList/>}
            ] }
        ]
    }  
])

export default router