import React from "react"
import {Link} from "react-router-dom"
import classnames from "classnames"
import "./MainNav.scss"
import logo from "../../images/icon-adidas-logo-white.svg"
import useDisplayToggle from "../../hooks/useDisplay";
import MenNav from "./collapsed/MenNav";
import WomenNav from "./collapsed/WomenNav";

function MainNav (props) {
    let { show: men, setTrue: setMenTrue, setFalse: setMenFalse } = useDisplayToggle()
    let { show: women, setTrue: setWomenTrue, setFalse: setWomenFalse } = useDisplayToggle()
    let { show: kids, setTrue: setKidsTrue, setFalse: setKidsFalse } = useDisplayToggle()
    return(
        <>
        <main className="main-outter">
        <header className="main-nav-bar">
                <Link to="/" ><img className="logo" src={logo} alt="Adidas Logo"/></Link>
                <nav className="main-nav-right">
                    <div onMouseOver={setMenTrue} onMouseLeave={setMenFalse} className={classnames({links: men})}><h4>MEN</h4></div>
                    <div onMouseOver={setWomenTrue} onMouseLeave={setWomenFalse} className={classnames({links: women})}><h4>WOMEN</h4></div>
                    <div onMouseOver={setKidsTrue} onMouseLeave={setKidsFalse} className={classnames({links: kids})}><h4>KIDS</h4></div>
                    <div className="menu-spacer-2"></div>
                    <div><h4>SPORTS</h4></div>
                    <div><h4>BRANDS</h4></div>
                    <div className="menu-spacer-2"></div>
                    <div><h4>RELEASE DATES</h4></div>
                </nav>
                    <div className="search">
                        <input className="search-input" placeholder="search"/>
                    </div>
        </header>
        </main>
        {men && <MenNav enter={setMenTrue} leave={setMenFalse}/>}
        {women && <WomenNav enter={setWomenTrue} leave={setWomenFalse}/>}
        {kids && <MenNav enter={setKidsTrue} leave={setKidsFalse}/>}
        </>

    )
}

export default MainNav