import React from 'react'
import ResultSearchBar from './common/ResultSearchBar'
import ResultPathPages from './resultPages/ResultPathPages'

const Results = () => {
  return (
    <>
        <div className=' w-full flex flex-col '>
            <ResultSearchBar/>
            <ResultPathPages/>
        </div>
    </>
  )
}

export default Results