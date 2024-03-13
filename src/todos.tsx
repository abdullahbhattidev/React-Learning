import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { map } from 'zod'
import apiTodo, { data } from './hooks/apiservice'


const Todos = () => {
    const {data, error, isLoading} = apiTodo("/todos")
    if(error) return <p>{error.message}</p>
    if(isLoading) return <p>Loading...</p>
  return (
    <ul>{data?.map(todo => <li>{todo.title}</li>)}</ul>
  )
}

export default Todos