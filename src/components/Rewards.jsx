import React from 'react'
import Navbar from './Navbar'
import Footer from './footer'

function Rewards() {
  return (
    <div>
        <Navbar/>
        <div>
        <div id='rewards' className='rewards-main'>Starbucks® Rewards</div>
        <div className='primary-rewards-header'>
            <div className='background-img'>
              {/* <img src="https://www.starbucks.com/weblx/images/rewards/hero/xl-hero-desktop_2021.png" alt="" /> */}
            {/*images didnt open in the page*/}
            <h2>FREE COFFEE
              <br></br>
              IS A TAP AWAY</h2>
              <p>Join Now to start earnings Rewards</p>
              <li id='rewards-box-color' className='previous-list'>Join now</li>
              <p>Or <a className='color-green' href="#">join in the app</a>for the best experience</p>
            </div>
          </div>
          
          <div className='primary-content-rewards'>
            <div className='primary-content-rewards-header'> 
            <h2 >Getting started is easy</h2>
            <p className='para-header'>Earn Stars and get rewarded in a few easy steps.</p>

            <div className='rewards-content-header'>
              <div className='rewards-content-1'>
              <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 256 512"> <path d="M160 64c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.8 1.6l-96 64C-.5 111.2-4.4 131 5.4 145.8s29.7 18.7 44.4 8.9L96 123.8V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160V64z"/></svg>
              <h3>Create an account</h3>
              <p>
              To get started, 
              <a className='color-green' href="#">join now</a>
              . You can also ,
              <a className='color-green' href="#">join in the app</a>
              to get access to the full range of Starbucks® Rewards benefits.
              </p>
              </div>
              <div className='rewards-content-2'>
              <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 320 512"><path d="M142.9 96c-21.5 0-42.2 8.5-57.4 23.8L54.6 150.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L40.2 74.5C67.5 47.3 104.4 32 142.9 32C223 32 288 97 288 177.1c0 38.5-15.3 75.4-42.5 102.6L109.3 416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L200.2 234.5c15.2-15.2 23.8-35.9 23.8-57.4c0-44.8-36.3-81.1-81.1-81.1z"/></svg>
              <h3>Order and pay how you’d like</h3>
              <p>
              Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. 
              <a className='color-green' href="#">Learn how</a>
              </p>
              </div>
              <div className='rewards-content-3'>
              <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 320 512"><path d="M0 64C0 46.3 14.3 32 32 32H272c13.2 0 25 8.1 29.8 20.4s1.5 26.3-8.2 35.2L162.3 208H184c75.1 0 136 60.9 136 136s-60.9 136-136 136H105.4C63 480 24.2 456 5.3 418.1l-1.9-3.8c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l1.9 3.8c8.1 16.3 24.8 26.5 42.9 26.5H184c39.8 0 72-32.2 72-72s-32.2-72-72-72H80c-13.2 0-25-8.1-29.8-20.4s-1.5-26.3 8.2-35.2L189.7 96H32C14.3 96 0 81.7 0 64z"/></svg>
              <h3>Earn Stars, get Rewards</h3>
              <p>
              <p class="pt3">As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!</p>
              </p>
              </div>
              </div>
            </div>

            <div className='secondary-header-rewards'>
            <h2>Endless Extras</h2>
            <p className='para-header'>Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.</p>
            <div className='secondary-content-rewards'>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 512 512"><path d="M61.1 224C45 224 32 211 32 194.9c0-1.9 .2-3.7 .6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9 .6 3.7 .6 5.6c0 16.1-13 29.1-29.1 29.1H61.1zM144 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm240 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM272 96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM16 304c0-26.5 21.5-48 48-48H448c26.5 0 48 21.5 48 48s-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm16 96c0-8.8 7.2-16 16-16H464c8.8 0 16 7.2 16 16v16c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V400z"/></svg>
              <h2>Fun freebies</h2>
              <p>Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.</p>
              <a className='color-green' href="#">Learn more</a>
              </div>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 384 512"><path d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
              <h2>Order & pay ahead</h2>
              <p>Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.</p>
              <a className='color-green' href="#">Learn more</a>
              </div>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 512 512"><path d="M88 0C74.7 0 64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24c0-13.3-10.7-24-24-24zM32 192c-17.7 0-32 14.3-32 32V416c0 53 43 96 96 96H288c53 0 96-43 96-96h16c61.9 0 112-50.1 112-112s-50.1-112-112-112H352 32zm352 64h16c26.5 0 48 21.5 48 48s-21.5 48-48 48H384V256zM224 24c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24z"/></svg>
              <h2>Get to free faster</h2>
              <p>Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.</p>
              <a className='color-green' href="#">Learn more</a>
              </div>
            </div>
            </div>
          </div>
          <Footer/>
        </div>
    </div>
  )
}

export default Rewards