import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { map } from 'zod'
interface todos {
    id?: number
}

const Todos = ({id}: todos) => {
    const {data} = useQuery({
        queryKey: ['todos'], 
        queryFn: () => axios.get<todos[]>("https://jsonplaceholder.typicode.com/todos")
                            .then(res => res.data)
    })

  return (
    <ul>{data?.map(todo => <li>{todo.id}</li>)}</ul>
  )
}

export default Todos