import React from "react" 

function Authentication(props) {
    return (
        <div className="auth">
            <div className="login-input"> <input placeholder="EMAIL ADDRESS" required/></div>
            <div className="login-input"> <input placeholder="PASSWORD" required/></div>
            <div className="remember-me">    
                <input type="checkbox" className="check-input" /> 
                <label>Remember Me</label>
            </div>
            <p>I have read and accepted <span>Terms &#38; Conditions</span> and 
                the Adidas <span>Privacy Statement</span>
            <br />
            We have new terms and conditions. By clicking Log In, you agree to 
            the adidas Creators Club <span>Terms &#38; Conditions</span></p>
            <button className="login-button">LOG IN</button>
        </div>

    )
}

export default Authentication