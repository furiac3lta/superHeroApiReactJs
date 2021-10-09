import React from 'react'
import Navbar from './Navbar.js'
function Layout({children}) {
    return (
        <>
         <Navbar />
         {children}   
        </>
    )
}

export default Layout
