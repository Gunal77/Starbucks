import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";

function Features() {
    return (
    <div>
        <Navbar/>
        <h1 id="featured" className="main-header-features">Here comes the merry</h1>
        <div className="main-features">
            <div className="primary-features">
                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-87335.jpg" alt="" />
                <div className="span">
                <div className="primary-features-header">Peppermint Mocha</div>
                <p className="primary-features-content">Espresso, steamed milk, mocha sauce and peppermint-flavored syrup with whipped cream and dark-chocolate curls.</p>
                <li className='order'>Order now</li>
                </div>
            </div>
        
            <div className="secondary-features">
            <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-87336.jpg" alt="" />
                <p  className="primary-features-header">Peppermint Mocha</p>
                <p className="primary-features-content">Espresso, steamed milk, mocha sauce and peppermint-flavored syrup with whipped cream and dark-chocolate curls.</p>
                <li className='order'>Order now</li>
            </div>
        </div>
        <Footer/>
    </div>
    )
}

export default Features