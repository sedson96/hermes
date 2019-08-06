import React from "react"
import TopHead from "./TopHead"
import LandingCategories from "../Landing/LandingCategories"
import LandingFeatured from "./LandingFeatured"
import Footer from "../Footer/Footer";
import Navbar from "../Nav/Navbar";
import SignupBanner from "../banners/SignupBanner";
import SecondaryFeature from "./SecondaryFeature";

function LandingMain() {
    return (
        <>
            <Navbar/>
            <TopHead/>
            <LandingCategories/>
            <SecondaryFeature/>
            <LandingFeatured/>
            <SignupBanner/>
            <Footer/>
        </>
    )
}


export default LandingMain