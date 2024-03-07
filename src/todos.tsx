import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { map } from 'zod'
import apiTodo from './hooks/apiservice'
interface todos {
    title?: string
}

const Todos = ({title}: todos) => {
    const {data, error, isLoading} = apiTodo()
    if(error) return <p>{error.message}</p>
    if(isLoading) return <p>Loading...</p>
  return (
    <ul>{data?.map(todo => <li>{todo.title}</li>)}</ul>
  )
}

export default Todos