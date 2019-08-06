import React, { useEffect, useState } from "react"
import classnames from "classnames"
import MainNav from "./MainNav";
import Uppernav from "./Uppernav";
import "./MainNav.scss"


function Navbar (props) {
    let [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset)
    let [visible, setVisible] = useState(true)
    
    useEffect(() => {
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            let vis = prevScrollpos > currentScrollPos
            setVisible(vis)
            setPrevScrollpos(currentScrollPos)

        return window.removeEventListener("onscroll", () => console.log("left"))
            }
    },[prevScrollpos]) 
    
    // console.log(prevScrollpos)
    
    // let handleScroll = () => {
    //     console.log("hit")
    //     var currentScrollPos = window.pageYOffset;
    //     let vis = prevScrollpos > currentScrollPos
    //     setVisible(vis)
    //     setPrevScrollpos(currentScrollPos)
    // }
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