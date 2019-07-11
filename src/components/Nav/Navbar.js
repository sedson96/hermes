import React, { useEffect, useState } from "react"
import classnames from "classnames"
import MainNav from "./MainNav";
import Uppernav from "./Uppernav";
import "./MainNav.scss"


function Navbar (props) {
    let [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset)
    let [visible, setVisible] = useState(true)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }  
    },[]) 
    
    console.log(prevScrollpos)
    
    let handleScroll = () => {
        const currentScrollPos = window.pageYOffset - 1;
        const visible = prevScrollpos > currentScrollPos;
            setVisible(visible)
            setPrevScrollpos(currentScrollPos)
    }
    return (
        <>
            <nav className={classnames("navs", { "navs-gone": !visible })}>
                <Uppernav/>
                <MainNav/>
            </nav>
            <nav className="placeholder"></nav>
        </>
    )
}

export default Navbar