import React from "react" 
import Uppernav from "../Nav/Uppernav";
import MainNav from "../Nav/MainNav";
import Footer from "../Footer/Footer"
import LoginRight from "./LoginRight";
import "./Login.scss"
import LoginLeft from "./LoginLeft";

function LoginMain() {
    return (
        <>
        <Uppernav/>
        <MainNav/>
        <div className="login-container">
            <div className="login">
                <div className="breadcrumbs">
                    <h2>Home / Login And Register</h2>
                </div>
                <LoginRight/>
                <LoginLeft/>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default LoginMain