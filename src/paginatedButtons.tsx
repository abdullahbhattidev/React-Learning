import React from 'react'

interface props{
//     nextPage: (ittierate: number) => void,
//     currentpage: number;
  loadMorePages: ()=>void
  isfetching: boolean
}

const PaginatedButtons = ({loadMorePages, isfetching}: props) => {
    
  return (
    <>
    {/* //     <button disabled={currentpage === 1} onClick={()=> nextPage(-1)} className='btn btn-primary m-3'> Previous</button>
    //     <button disabled={currentpage === 20} onClick={()=> nextPage(1)} className='btn btn-primary'> Next</button> */}

    <button onClick={()=> loadMorePages() } className='btn btn-primary m-3'>{isfetching? "Loading...": "Load More"}</button>
    </>
    

  )
}

export default PaginatedButtons