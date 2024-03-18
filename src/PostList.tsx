import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { map, number } from 'zod'
import apiTodo, { data } from './hooks/apiservice'

interface props {
  userId?: number | undefined;
  pageSize: number;
  pageNo: number;
}
const PostList = ({userId, pageSize, pageNo}:props) => {
    const {data, error, isLoading} = apiTodo({endpoint: "/posts", userId, pageSize, pageNo})
    if(error) return <p>{error.message}</p>
    if(isLoading) return <p>Loading...</p>
  return (
    <ul className='list-group m-3'>{data?.map(post => <li className='list-group-item' > {post.id} {post.title}</li>)}</ul>
  )
}

export default PostList