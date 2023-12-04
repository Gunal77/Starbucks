import Navbar from "./Navbar"
import NavbarContent from "./NavbarContent"
import Sidebar from "./Sidebar"
import Footer from "./footer"
import React from 'react'

function Home() {
  return (
    <div>
      <NavbarContent/>
      <Sidebar/>
      <Footer/>
    </div>
  )
}

export default Home