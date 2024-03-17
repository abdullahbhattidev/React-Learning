import React from 'react'

interface props{
    nextPage: (ittierate: number) => void,
}

const PaginatedButtons = ({nextPage}:props) => {
  return (
    <>
        <button onClick={()=> nextPage(-1)} className='btn btn-primary m-3'> Previous</button>
        <button onClick={()=> nextPage(1)} className='btn btn-primary'> Next</button>
    </>
    

  )
}

export default PaginatedButtons