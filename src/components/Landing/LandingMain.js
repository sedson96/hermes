import React from "react"
import Uppernav from "../Nav/Uppernav"
import MainNav from "../Nav/MainNav"
import TopHead from "./TopHead"
import LandingCategories from "../Landing/LandingCategories"
import LandingFeatured from "./LandingFeatured"
import Footer from "../Footer/Footer";
import Navbar from "../Nav/Navbar";

function LandingMain() {
    return (
        <>
            <Navbar/>
            <TopHead/>
            <LandingCategories/>
            <LandingFeatured/>
            <Footer/>
        </>
    )
}


export default LandingMain