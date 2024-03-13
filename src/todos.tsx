import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { map } from 'zod'
import apiTodo, { data } from './hooks/apiservice'

interface props {
  UserId : number | undefined;
}
const Todos = ({UserId}:props) => {
    const {data, error, isLoading} = apiTodo("/todos", UserId)
    if(error) return <p>{error.message}</p>
    if(isLoading) return <p>Loading...</p>
  return (
    <ul className='list-group m-3'>{data?.map(todo => <li className='list-group-item'>{todo.title}</li>)}</ul>
  )
}

export default Todos