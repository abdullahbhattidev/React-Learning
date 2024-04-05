import apiEndpoint from './hooks/useInfiniteQuery';
import PaginatedButtons from './paginatedButtons';

interface props {
  userId?: number | undefined;
  pageSize: number;
}
const PostList = ({userId, pageSize}:props) => {
    const {data, error, isLoading, fetchNextPage, isFetchingNextPage} = apiEndpoint({endpoint: "posts", userId, pageSize})
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