import React from 'react'

interface props{
    nextPage: (ittierate: number) => void,
    currentpage: number;
}

const PaginatedButtons = ({nextPage, currentpage}:props) => {
    
  return (
    <>
        <button disabled={currentpage === 1} onClick={()=> nextPage(-1)} className='btn btn-primary m-3'> Previous</button>
        <button disabled={currentpage === 20} onClick={()=> nextPage(1)} className='btn btn-primary'> Next</button>
    </>
    

  )
}

export default PaginatedButtons