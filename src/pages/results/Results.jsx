import React from 'react'
import ResultSearchBar from './ResultSearchBar'
import SearchResult from './SearchResult'


const Results = () => {
  return (
    <>
        <div className=' w-full flex flex-col '>
            <ResultSearchBar/>
            <SearchResult/>
        </div>
    </>
  )
}

export default Results