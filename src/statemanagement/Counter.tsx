import React, { useReducer } from 'react'
import counterReducer from './conterReducer'

const Counter = () => {
   const [value, dispatch]= useReducer(counterReducer,0)
  return (
    <div>Counter ({value})
    <button className='btn btn-primary mx-1' onClick={()=> dispatch({type: "INCREMENT"})}>increment</button>
    <button className='btn btn-danger mx-1' onClick={()=> dispatch({type: "RESET"})}>Reset</button>
    </div>
  )
}

export default Counter