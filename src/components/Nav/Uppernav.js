import React from "react"
import {Link} from "react-router-dom"
import Person from "@material-ui/icons/PersonOutline"
import "./Uppernav.scss"

function Uppernav (props) {
    return(
        <div className="upper-outter">
            <header className="upper-nav-bar">
                <nav className="upper-nav">
                    <a>HELP</a>
                    <div className="menu-spacer"></div>
                    <a>ORDER TRACKER AND RETURNS</a>
                    <div className="menu-spacer"></div>
                    <a><strong>NEWSLETTER SIGNUP</strong></a>
                    <a>CREATORS CLUB</a>
                    <div className="menu-spacer"></div>
                    <Link className="a" to="/Login">LOG IN</Link>
                    <Person />
                </nav>
            </header>
        </div>
    )
}

export default Uppernav