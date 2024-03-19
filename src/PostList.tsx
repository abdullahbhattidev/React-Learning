import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { map, number } from 'zod'
import apiTodo, { data } from './hooks/apiservice'
import PaginatedButtons from './paginatedButtons'

interface props {
  userId?: number | undefined;
  pageSize: number;
}
const PostList = ({userId, pageSize}:props) => {
    const {data, error, isLoading, fetchNextPage, isFetchingNextPage} = apiTodo({endpoint: "/posts", userId, pageSize})
    if(error) return <p>{error.message}</p>
    if(isLoading) return <p>Loading...</p>
  return (
    <>
        <ul className='list-group m-3'>{data.pages?.map(posts => posts.map(post => <li className='list-group-item' > {post.id} {post.title}</li>) )}</ul>
        <PaginatedButtons isfetching={isFetchingNextPage} loadMorePages={()=> fetchNextPage()} />
    </>
  )
}

export default PostList