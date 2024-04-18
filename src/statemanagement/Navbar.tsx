import { useContext } from 'react'
import LoginStatus from './LoginStatus'
import useTaskStore from './TaskStore'
import { Link } from 'react-router-dom'

const Navbar = () => {
  

  return (
    <nav className='navbar  bg-primary d-flex justify-content-between text-white'>
        <div className='d-flex justify-content-between mx-3'>
          <Link className='mx-3 text-white' to={"/"}>Home</Link>
          <Link className='text-white ' to={"/TaskList/:user"}>Tasks</Link>
        </div>
        <LoginStatus/>
    </nav>
    
  )
}

export default Navbar