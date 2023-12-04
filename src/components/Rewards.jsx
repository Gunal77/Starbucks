import React from 'react'
import Navbar from './Navbar'

function Rewards() {
  return (
    <div>
        <Navbar/>
        <div>
        <div id='rewards' className='rewards-main'>Starbucks® Rewards</div>
        <div className='primary-rewards-header'>
            <img src='./images/starbucks.jpg'></img>
            {/*images didnt open in the page*/}
            
        </div>
        </div>
    </div>
  )
}

export default Rewards