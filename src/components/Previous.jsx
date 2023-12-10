import React from 'react'
import Footer from './Footer'
import NavbarContent from './NavbarContent'
import img4 from './images/moon.png'

function Previous() {
  return (
    <div>
        <NavbarContent/>
        <div id='previous' className='previous-header'>
        <h2>Previous</h2>
        <img src={img4} alt='Animated illustration shows phases of the moon'></img>
        <div className='previous-header-1'>When history repeats itself</div>
        <div className='previous-content'>Previous orders will appear here to quickly order again.</div>
        <div className='previous-header-list'> 
        <button id='box-gift' className='previous-list'>Sign in</button>
        <button id='box-color' className='previous-list'>Join now</button>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Previous
