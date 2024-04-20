import React from 'react'
import useAuthStore from '../statemanagement/AuthStore'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  const{Auth}= useAuthStore()
  if(!Auth)
    
  return (
    <Navigate to={"LoginStatus"}/>
  )
  return(
    <Outlet/>
  )
}

export default PrivateRoute