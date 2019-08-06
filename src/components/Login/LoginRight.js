import React from "react"
import Authentication from "./Authentication";


function LoginRight(props) {
    return (
        <div className="login-right-side" >
            <h1>LOGIN</h1>
            <h5>Forgot Your Password?</h5>
            <Authentication/>
            <br/>
            <label>You can also log in with one of these accounts</label>
            {/* <div className="buttons" > */}
                <button className="facebook-button">FACEBOOK</button>
                <button className="google-button">GOOGLE</button>
                <button className="runtastic-button">RUNTASTIC</button>
                <button className="yahoo-button">YAHOO</button>
            {/* </div> */}
        </div>
    )
}

export default LoginRight