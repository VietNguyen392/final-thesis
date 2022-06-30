import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
const Layout = (props) => {
  return (
    <>
    <Navbar/>
    <section className='section'>
    {props.children}
    </section>
    <Footer/>
    </>
  )
}

export default Layout