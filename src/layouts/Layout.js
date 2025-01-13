import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Layout = () => {
  return (
    <div  id="wrapper" className="no-overflow-x">
    <Header />
    <div>
      <Outlet />
    </div>
    <div className="relative">
      <Footer />
    </div>
  </div>
  )
}

export default Layout