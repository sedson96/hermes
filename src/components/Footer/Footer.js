import React from "react"
import "./Footer.scss"

function Footer(props) {
    return (
        <footer className="main-footer-container">
            <div className="main-footer">
                <ul className="link-block">
                    <h4 className="main-links">CUSTOMER SUPPORT</h4>
                    <br />
                    <h4 className="secondary-links">Help</h4>
                    <h4 className="secondary-links">Order Tracker</h4>
                    <h4 className="secondary-links">Returns &#38; Refunds</h4>
                    <h4 className="secondary-links">Sizing</h4>
                    <h4 className="secondary-links">Promotions</h4>
                    <h4 className="secondary-links">How to Clean</h4>
                    <h4 className="secondary-links">Store Locator</h4>
                    <h4 className="secondary-links">Site Map</h4>
                </ul>
                <ul className="link-block">
                    <h4 className="main-links">COMPANY INFO</h4>
                    <br />
                    <h4 className="secondary-links">About Us</h4>
                    <h4 className="secondary-links">Careers</h4>
                    <h4 className="secondary-links">Press</h4>
                    <h4 className="secondary-links">Affiliates</h4>
                    <h4 className="secondary-links">Students</h4>
                    <h4 className="secondary-links">Mobile Apps</h4>
                    <h4 className="secondary-links">Creators Club</h4>
                    <h4 className="secondary-links">adidas Stories</h4>
                </ul>
                <ul className="link-block">
                    <h4 className="main-links" >PARTNER SITES</h4>
                    <br />
                    <h4 className="secondary-links">adidas Outdoor</h4>
                    <h4 className="secondary-links">miTeam</h4>
                </ul>
                <ul className="link-block">
                    <h4 className="main-links" >PRIVACY &#38; TERMS</h4>
                    <br />
                    <h4 className="secondary-links">Privacy &#38; Security</h4>
                    <h4 className="secondary-links">adidias - Runtastic Privacy Statement</h4>
                    <h4 className="secondary-links">Terms and Conditions</h4>
                    <h4 className="secondary-links">Policy on Human Traffick</h4>
                </ul>
                <ul className="link-block">
                    <h4 className="main-links" >GIFT CARDS</h4>
                    <br />
                    <h4 className="secondary-links">Check Balance</h4>
                </ul>
            </div>
            <section className="small-foot">
                <div className="small">
                    <div className="usa">
                        <span>USA</span>

                    </div>
                    <div className="legal">
                        <span className="foot-break">|</span>
                        <h4 className="foot-links">Privacy Policy</h4>
                        <span className="foot-break">|</span>
                        <h4 className="foot-links">Terms and Conditions</h4>
                        <span className="foot-break">|</span>
                        <h4 className="foot-links">&#64; 2019 Sorry addidas Inc.</h4>

                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer