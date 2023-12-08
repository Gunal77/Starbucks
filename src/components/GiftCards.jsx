import React from 'react'
import Navbar from './Navbar'
import img1 from "./images/logo.png"
import img2 from "./images/contact.png"
import Footer from './footer'

function GiftCards() {
  return (
    <div>
        <Navbar/>
        <div>
            <div className='header-navbar-gift'>
                <h3>FEATURED</h3>
                <div className='gift-image-header-1'>
                    <div className='gift-image-primary'>
                        <img className='gift-image-1' src="https://globalassets.starbucks.com/digitalassets/cards/fy24/SeasonsTreatingsFY24.png" width="90%" height="90%" alt=""/>
                    </div>
                    <div className='gift-image-primary'>
                        <img className='gift-image-1' src="https://globalassets.starbucks.com/digitalassets/cards/fy24/WinterSnowmanFY24.jpg" width="90%" height="90%" alt="" />
                    </div>
                    <div className='gift-image-primary'>
                        <img className='gift-image-1' src="https://globalassets.starbucks.com/digitalassets/cards/fy24/RedCupPenguinFY24.jpg" width="90%" height="90%" alt="" />
                    </div>
                    <div className='gift-image-primary'>
                        <img className='gift-image-1' src="https://globalassets.starbucks.com/digitalassets/cards/fy24/TheColorPurpleFY24.png" width="90%" height="90%" alt="" />
                    </div>
                </div>
                <div className='group-content-gift'>
                    <img src={img1} width="5%" height="5%" alt="logo" />
                    <p>New! Effortlessly send up to 10 eGifts per purchase. Select a design to start!</p>
                </div>
            </div>
            <div className='secondary-gift-header'>
                <h2>Received a gift card?</h2>
                <p>Earns 2 ★  per $1</p>
                <li id='box-gift' className='content-gift'>Add or Reload</li>
                <li id='box-color-gift' className='content-gift'>Check balance</li>
            </div>
            <div className='header-navbar-gift'>
                <h3>RED CUP</h3>
                <div className='gift-image-header-1'>
                    <div className='gift-image-primary'>
                        <img className='gift-image-1' src="https://globalassets.starbucks.com/digitalassets/cards/fy24/RedCupTreeFY24.jpg" width="90%" height="90%" alt=""/>
                    </div>
                    <div className='gift-image-primary'>
                        <img className='gift-image-1' src="https://globalassets.starbucks.com/digitalassets/cards/fy24/RedCupPenguinFY24.jpg" width="90%" height="90%" alt="" />
                    </div>
                    <div className='gift-image-primary'>
                        <img className='gift-image-1' src="https://globalassets.starbucks.com/digitalassets/cards/fy23/FestiveFeelingFY23.jpg" width="90%" height="90%" alt="" />
                    </div>
                    <div className='gift-image-primary'>
                        <img className='gift-image-1' src="https://globalassets.starbucks.com/digitalassets/cards/fy23/CelebrationHolidayFY23.jpg" width="90%" height="90%" alt="" />
                    </div>
                </div>
            </div>
            <div className='header-navbar-gift'>
                <h3>CHRITMAS | 12/25</h3>
                <div className='gift-image-header-1'>
                    <div className='gift-image-primary'>
                        <img className='gift-image-1' src="https://globalassets.starbucks.com/digitalassets/cards/fy24/MerryChristmasFY24.jpg" width="90%" height="90%" alt=""/>
                    </div>
                    <div className='gift-image-primary'>
                        <img className='gift-image-1' src="https://globalassets.starbucks.com/digitalassets/cards/fy24/GiftTreeFY24.jpg" width="90%" height="90%" alt="" />
                    </div>
                    <div className='gift-image-primary'>
                        <img className='gift-image-1' src="https://globalassets.starbucks.com/digitalassets/cards/fy24/LetItSnowFY24.jpg" width="90%" height="90%" alt="" />
                    </div>
                    <div className='gift-image-primary'>
                        <img className='gift-image-1' src="https://globalassets.starbucks.com/digitalassets/cards/fy24/BakingCookiesFY24.jpg" width="90%" height="90%" alt="" />
                    </div>
                </div>
            </div>
            <div className='header-navbar-gift'>
                <h3>HOLIDAY</h3>
                <div className='gift-image-header-1'>
                    <div className='gift-image-primary'>
                        <img className='gift-image-1' src="https://globalassets.starbucks.com/digitalassets/cards/fy24/HappyHolidaysFY24.jpg" width="90%" height="90%" alt=""/>
                    </div>
                    <div className='gift-image-primary'>
                        <img className='gift-image-1' src="https://globalassets.starbucks.com/digitalassets/cards/fy24/WinterSnowmanFY24.jpg" width="90%" height="90%" alt="" />
                    </div>
                    <div className='gift-image-primary'>
                        <img className='gift-image-1' src="https://globalassets.starbucks.com/digitalassets/cards/fy24/FaLaLaLattesFY24.jpg" width="90%" height="90%" alt="" />
                    </div>
                    <div className='gift-image-primary'>
                        <img className='gift-image-1' src="https://globalassets.starbucks.com/digitalassets/cards/fy24/DesertSnowmanFY24.jpg" width="90%" height="90%" alt="" />
                    </div>
                </div>
            </div>
            <div className='header-navbar-gift'>
                <h3>THANK YOU</h3>
                <div className='gift-image-header-1'>
                    <div className='gift-image-primary'>
                        <img className='gift-image-1' src="https://globalassets.starbucks.com/digitalassets/cards/fy24/HolidayThankYouFY24.jpg" width="90%" height="90%" alt=""/>
                    </div>
                    <div className='gift-image-primary'>
                        <img className='gift-image-1' src="https://globalassets.starbucks.com/digitalassets/cards/fy24/ThankYouBlocksFY24.jpg" width="90%" height="90%" alt="" />
                    </div>
                    <div className='gift-image-primary'>
                        <img className='gift-image-1' src="https://globalassets.starbucks.com/digitalassets/cards/fy22/BigThankYouFY22.jpg" width="90%" height="90%" alt="" />
                    </div>
                    <div className='gift-image-primary'>
                        <img className='gift-image-1' src="https://globalassets.starbucks.com/digitalassets/cards/fy23/ThankYouTreatFY23.jpg" width="90%" height="90%" alt="" />
                    </div>
                </div>
            </div>
            <div className='business-header'>
                <div className='business-content-1'>
                    <img src={img2} width="90%" height="90%" alt="" />
                </div>
                <div className='business-content-1'>
                    <h2>Business gifting — simplified</h2>
                    <p className='right'>Bulk send physical or digital Starbucks Cards to gift, reward, incentivize, or show appreciation towards your customers, clients and team members. Minimum 15 cards per order.</p>
                    <li id='box-gift' className='content-gift'>Show now</li>
                </div>

            </div>
            <div className='support-header'>
                <h2>Gift Card Support</h2>
                <p className='right-2'>Use the links below to manage eGifts you have sent or received, or view our full Card Terms & Conditions.</p>
                <div className='support-flex'>
                    <div className='support-content'>
                    <li id='box-gift' className='content-gift'>eGift support</li> 
                    </div>
                    <div className='support-content'>
                    <li id='box-gift' className='content-gift'>See Term&Conditions</li>
                    </div>
                    <div className='support-content'>
                    <li id='box-gift' className='content-gift'>See Gift FAQs</li>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default GiftCards