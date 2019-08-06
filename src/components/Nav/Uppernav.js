import React from "react"
import {Link} from "react-router-dom"
import Person from "@material-ui/icons/PersonOutline"
import "./Uppernav.scss"

function Uppernav (props) {
    return(
        <div className="upper-outter">
            <header className="upper-nav-bar">
                <nav className="upper-nav">
                    <h4>HELP</h4>
                    <div className="menu-spacer"></div>
                    <h4>ORDER TRACKER AND RETURNS</h4>
                    <div className="menu-spacer"></div>
                    <h4><strong>NEWSLETTER SIGNUP</strong></h4>
                    <h4>CREATORS CLUB</h4>
                    <div className="menu-spacer"></div>
                    <Link className="a" to="/login">LOG IN</Link>
                    <Person />
                </nav>
            </header>
        </div>
    )
}

export default Uppernav