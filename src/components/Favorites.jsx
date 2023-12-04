import React from 'react'
import Navbar from './Navbar'
import Footer from './footer'
import NavbarContent from './NavbarContent'
function Favorites() {
  return (
    <div>
        <NavbarContent/>
        <div id='previous' className='previous-header'>
        <h2>Favorites</h2>
        <img src='/weblx/images/fav-tapes.png' alt='Illustration of well-used vintage mix tapes'></img>
        <div className='previous-header-1'>Save your favorite mixes</div>
        <div className='previous-content'>Use the heart to save customizations. Your favorites will appear here to order again.</div>
        <div className='previous-header-list'> 
        <li id='box' className='previous-list'>Sign in</li>
        <li id='box-color' className='previous-list'>Join now</li>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Favorites