import React from 'react'
import Navbar from './Navbar'

function NavbarContent (){
  return (
    <div>
        <Navbar/>
        <div className='header-content'>
            <li className='header-list'><a href='/'> Menu</a></li>
            <li className='header-list'><a href='/featured'>Featured</a></li>
            <li className='header-list'><a href='/previous'>Previous</a></li>
            <li className='header-list'><a href='/favorites'>Favorites</a></li>
          </div>
    </div>
  )
}

export default NavbarContent
