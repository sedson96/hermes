import React from "react"
import "./Footer.scss"

function Footer(props) {
    return (
        <footer className="main-footer-container">
            <div className="main-footer">
                <ul className="link-block">
                    <a className="main-links">CUSTOMER SUPPORT</a>
                    <br />
                    <a className="secondary-links">Help</a>
                    <a className="secondary-links">Order Tracker</a>
                    <a className="secondary-links">Returns &#38; Refunds</a>
                    <a className="secondary-links">Sizing</a>
                    <a className="secondary-links">Promotions</a>
                    <a className="secondary-links">How to Clean</a>
                    <a className="secondary-links">Store Locator</a>
                    <a className="secondary-links">Site Map</a>
                </ul>
                <ul className="link-block">
                    <a className="main-links">COMPANY INFO</a>
                    <br />
                    <a className="secondary-links">About Us</a>
                    <a className="secondary-links">Careers</a>
                    <a className="secondary-links">Press</a>
                    <a className="secondary-links">Affiliates</a>
                    <a className="secondary-links">Students</a>
                    <a className="secondary-links">Mobile Apps</a>
                    <a className="secondary-links">Creators Club</a>
                    <a className="secondary-links">adidas Stories</a>
                </ul>
                <ul className="link-block">
                    <a className="main-links" >PARTNER SITES</a>
                    <br />
                    <a className="secondary-links">adidas Outdoor</a>
                    <a className="secondary-links">miTeam</a>
                </ul>
                <ul className="link-block">
                    <a className="main-links" >PRIVACY &#38; TERMS</a>
                    <br />
                    <a className="secondary-links">Privacy &#38; Security</a>
                    <a className="secondary-links">adidias - Runtastic Privacy Statement</a>
                    <a className="secondary-links">Terms and Conditions</a>
                    <a className="secondary-links">Policy on Human Traffick</a>
                </ul>
                <ul className="link-block">
                    <a className="main-links" >GIFT CARDS</a>
                    <br />
                    <a className="secondary-links">Check Balance</a>
                </ul>
            </div>
            <section className="small-foot">
                <div className="small">
                    <div className="usa">
                        <span>USA</span>

                    </div>
                    <div className="legal">
                        <span className="foot-break">|</span>
                        <a className="foot-links">Privacy Policy</a>
                        <span className="foot-break">|</span>
                        <a className="foot-links">Terms and Conditions</a>
                        <span className="foot-break">|</span>
                        <a className="foot-links">&#64; 2019 Sorry addidas Inc.</a>

                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer