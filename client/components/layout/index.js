import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import Toaster from 'react-hot-toast'
const Layout = (props) => {
  return (
    <>
    <Navbar/>
    <section className='container overflow-hidden aspect-auto relative'>
        {props.children}
    </section>
    <Toaster
     position="top-center"
     reverseOrder={false}
    />
    <Footer/>
    </>
  )
}

export default Layout