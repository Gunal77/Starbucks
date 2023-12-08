import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";

function Features() {
    return (
    <div>
        <Navbar/>
        <h1 id="featured" className="main-header-features">Here comes the merry</h1>
        <div className="features-wrapper">
            <div className="box">
                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-87335.jpg" alt="imag1" />
                <div className="des">
                    <span>Peppermint Mocha</span>
                    <p>Espresso, steamed milk, mocha sauce and peppermint-flavored syrup with whipped cream and dark-chocolate curls.</p>
                    <button>Ordered Now</button>
                </div>
            </div>
            <div className="box">
                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-87336.jpg" alt="imag1" />
                <div className="des">
                    <span>Caramel Brulée Latte</span>
                    <p>A combination of espresso, steamed milk and caramel brulée sauce, finished with whipped cream caramel brulée topping.</p>
                    <button>Ordered Now</button>
                </div>
            </div>
            <div className="box">
                <img id="back-color-1" src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-87344.png" alt="imag1" />
                <div id="back-color-1" className="des">
                    <span>New Iced Gingerbread Oatmilk Chai</span>
                    <p>Our spiced chai tea blend is paired with gingerbread-flavored syrup and creamy oatmilk on ice.</p>
                    <button id="back-color-1">Ordered Now</button>
                </div>
            </div>
            <div className="box">
                <img id="back-color-1" src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-87345.png" alt="imag1" />
                <div id="back-color-1" className="des">
                    <span>Starbucks® Christmas Blend 2023</span>
                    <p>Dark-roast coffee with rare aged Sumatran beans and notes of spiced chocolate and spruce tips.</p>
                    <button id="back-color-1">Ordered Now</button>
                </div>
            </div>
            <div className="box">
                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-87346.jpg" alt="imag1" />
                <div id="back-color-2" className="des">
                    <span>Iced Sugar Cookie Almondmilk Latte</span>
                    <p>Starbucks® Blonde espresso, sugar cookie flavors and almondmilk on ice with red and green sprinkles.</p>
                    <button id="back-color-2">Ordered Now</button>
                </div>
            </div>
            <div className="box">
                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-87347.jpg" alt="imag1" />
                <div id="back-color-2" className="des">
                    <span>Snowman Cookie</span>
                    <p>A shortbread cookie with white-chocolaty icing, sweetly decorated with earmuffs and a scarf.</p>
                    <button id="back-color-2">Ordered Now</button>
                </div>
            </div>
            <div className="box">
                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-87348.jpg" alt="imag1" />
                <div id="back-color-3" className="des">
                    <span>Peppermint Mocha Frappuccino® blended</span>
                    <p>A blend of coffee, milk, ice, mocha sauce and peppermint-flavored syrup with whipped cream and dark-chocolate curls.</p>
                    <button id="back-color-3">Ordered Now</button>
                </div>
            </div>
            <div className="box">
                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-87349.jpg" alt="imag1" />
                <div id="back-color-3" className="des">
                    <span>Signature Hot Chocolatea</span>
                    <p>Steamed milk and chocolaty syrup, finished with whipped cream and chocolaty drizzle.</p>
                    <button id="back-color-3">Ordered Now</button>
                </div>
            </div>
            <div className="box">
                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-87350.jpg" alt="imag1" />
                <div id="back-color-4" className="des">
                    <span>Gingerbread Loaf</span>
                    <p>Spiced loaf with cream ginger, cinnamon, cloves and citrusy icing.</p>
                    <button id="back-color-4">Ordered Now</button>
                </div>
            </div>
            <div className="box">
                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-87351.jpg" alt="imag1" />
                <div id="back-color-4" className="des">
                    <span>Peppermint Brownie Cake Pop</span>
                    <p>Chocolate-peppermint cake, icing and a sprinkle of candy cane pieces.</p>
                    <button id="back-color-4">Ordered Now</button>
                </div>
            </div>
        </div>
        
    </div>
    )
}

export default Features