import React from "react"
import {Link} from "react-router-dom"
import "./MainNav.scss"
import logo from "../../images/icon-adidas-logo-white.svg"

function MainNav (props) {
    return(
        <main className="main-outter">
        <header className="main-nav-bar">
                <Link to="/" ><img className="logo" src={logo} /></Link>
                <nav className="main-nav-right">
                    <div><a>MEN</a></div>
                    <div><a>WOMEN</a></div>
                    <div ><a>KIDS</a></div>
                    <div className="menu-spacer-2"></div>
                    <div><a>SPORTS</a></div>
                    <div><a>BRANDS</a></div>
                    <div className="menu-spacer-2"></div>
                    <div><a>RELEASE DATES</a></div>
                </nav>
                    <div className="search">
                        <input className="search-input" placeholder="search"/>
                    </div>
        </header>
        </main>
    )
}

export default MainNav