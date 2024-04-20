import { Link, NavLink } from 'react-router-dom'
import useTaskStore from './TaskStore'
import PrivateRoute from '../routing/privateRoute';
import useAuthStore from './AuthStore';

const Navbar = () => {
  const Tasks =useTaskStore(s=> s.Tasks);
  const{user}= useAuthStore()
  return (
    <nav className='navbar  bg-primary d-flex justify-content-between text-white'>
        <div className='d-flex justify-content-between mx-3'>
          <NavLink className='mx-3 nav-link' to={"/"}>Home</NavLink>
          <NavLink className=' nav-link ' to={`LoginStatus`}>Tasks</NavLink>
        </div>
        <div className='mx-3 '>
          <span>{Tasks.length}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
          </svg>
      </div>
    </nav>
    
  )
}

export default Navbar