import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

const Error = () => {
  const error=  useRouteError();
  
  return (
    <div>
        <h1>{isRouteErrorResponse(error)? "invalid route": "other error"}</h1>
    </div>
  )
}

export default Error