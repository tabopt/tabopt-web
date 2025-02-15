import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SearchResult from './searchResult/SearchResult'
import WebResult from './webResult/WebResult'
import ImagesResult from './imageResult/ImagesResult'

const pages = [
    // { path: '/all', element: <SearchResult/> },
    { path: '/web', element: <WebResult/> },
    { path: '/images', element: <ImagesResult/> },

]

const ResultPathPages = () => {
    return (
        <>
            <Routes>
                {pages.map((item, index) => (
                    <Route key={index} path={item.path} element={item.element} />
                ))}
            </Routes>
        </>
    )
}

export default ResultPathPages
