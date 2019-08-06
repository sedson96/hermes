import React from "react"
import "./SignupBanner.scss"
import useDisplayToggle from "../../hooks/useDisplay";

function SignupBanner(props) {
    let {show, setTrue} = useDisplayToggle()
    return (
    <section className="banner-container"> 
        <div className="signup-offer">
            <h1>SIGN UP FOR NEWS &#38; <span>GET 15% OFF</span></h1>
            <div>
                <input onSelect={setTrue} placeholder="YOUR EMAIL ADDRESS"/>
            </div>
        </div>
        {show && 
        <div className="signup-offer-popup">
            <p>By clicking the "Sign up" button, I confirm I am over 13 years of age.</p>
            <p>Sign me up for the adidas emails, featuring exclusive offers, latest product info, 
                news about upcoming events and more. Please see our Terms and Conditions and Privacy 
                Policy for more details. Selected products may be excluded from the 15% promotion.</p>
        </div>
        }
    </section>
    )
}

export default SignupBanner;