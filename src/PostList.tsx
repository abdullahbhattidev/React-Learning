import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { map } from 'zod'
import apiTodo, { data } from './hooks/apiservice'


const PostList = () => {
    const {data, error, isLoading} = apiTodo("/posts")
    if(error) return <p>{error.message}</p>
    if(isLoading) return <p>Loading...</p>
  return (
    <ul>{data?.map(post => <li style={{listStyle: 'none'}}>{post.title}</li>)}</ul>
  )
}

export default PostList