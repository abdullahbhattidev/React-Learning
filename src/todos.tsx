import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { map } from 'zod'
interface todos {
    title?: string
}

const Todos = ({title}: todos) => {
    const {data, error} = useQuery<todos[], Error>({
        queryKey: ['todos'], 
        queryFn: () => axios.get<todos[]>("https://jsonplaceholder.typicode.com/todos")
                            .then(res => res.data)
    })
    if(error) return <p>{error.message}</p>

  return (
    <ul>{data?.map(todo => <li>{todo.title}</li>)}</ul>
  )
}

export default Todos