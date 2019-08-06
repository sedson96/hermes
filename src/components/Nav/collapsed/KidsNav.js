import React from "react"
import "./MenNav.scss"

function MenNav ({leave, enter}) {
    return (
        <footer onMouseLeave={leave} onMouseEnter={enter} className="main-nav-container">
        <div className="main-nav">
            <ul className="collapsed-link-blocks">
                <h4 className="main-links">FEATURED</h4>
                <br />
                <h4 className="collapsed-nav-links">New Arrivals</h4>
                <h4 className="collapsed-nav-links">Best Sellers</h4>
                <h4 className="collapsed-nav-links"> </h4>
                <br/>
                <h4 className="collapsed-nav-links">YEEZY</h4>
                <h4 className="collapsed-nav-links">Home of Classics</h4>
                <h4 className="collapsed-nav-links">Ultraboost</h4>
                <h4 className="collapsed-nav-links">adicolor</h4>
                <h4 className="collapsed-nav-links">Tennis</h4>
                <h4 className="collapsed-nav-links">Statement Sneakers</h4>
                <h4 className="collapsed-nav-links">Back to School</h4>
                <br/>
                <h4 className="collapsed-nav-links solid">SALE</h4>
                
            </ul>
            <ul className="collapsed-link-blocks">
                <h4 className="main-links">SHOES</h4>
                <br />
                <h4 className="collapsed-nav-links">Originals</h4>
                <h4 className="collapsed-nav-links">Running</h4>
                <h4 className="collapsed-nav-links">Soccer</h4>
                <h4 className="collapsed-nav-links">Basketball</h4>
                <h4 className="collapsed-nav-links">Football</h4>
                <h4 className="collapsed-nav-links">Skateboarding</h4>
                <h4 className="collapsed-nav-links">Workout</h4>
                <h4 className="collapsed-nav-links">Essentials</h4>
                <h4 className="collapsed-nav-links">Sandals &#38; Slides</h4>
                <h4 className="collapsed-nav-links">Hicking</h4>
                <h4 className="collapsed-nav-links">Golf</h4>
                <h4 className="collapsed-nav-links">Tennis</h4>
                <h4 className="collapsed-nav-links">Baseball</h4>
                <h4 className="collapsed-nav-links">Sale Shoes</h4>
            </ul>
            <ul className="collapsed-link-blocks">
                <h4 className="main-links" >CLOTHING</h4>
                <br />
                <h4 className="collapsed-nav-links">Pants</h4>
                <h4 className="collapsed-nav-links">Hoodies &#38; Sweatshirts</h4>
                <h4 className="collapsed-nav-links">Jackets &#38; Vests</h4>
                <h4 className="collapsed-nav-links">Track Suits</h4>
                <h4 className="collapsed-nav-links">Short Sleeve Shirts</h4>
                <h4 className="collapsed-nav-links">T-Shirt</h4>
                <h4 className="collapsed-nav-links">Long Sleeve Shirt</h4>
                <h4 className="collapsed-nav-links">Jersey</h4>
                <h4 className="collapsed-nav-links">Shorts</h4>
                <h4 className="collapsed-nav-links">Tank Tops</h4>
                <h4 className="collapsed-nav-links">Sale Apparel</h4>
            </ul>
            <ul className="collapsed-link-blocks">
                <h4 className="main-links" >ACCESSORIES</h4>
                <br />
                <h4 className="collapsed-nav-links">Bags &#38; Backbacks</h4>
                <h4 className="collapsed-nav-links">Hats &#38; Beanies</h4>
                <h4 className="collapsed-nav-links">Socks</h4>
                <h4 className="collapsed-nav-links">Underwear</h4>
                <h4 className="collapsed-nav-links">Phone Cases</h4>
                <h4 className="collapsed-nav-links">Sunglasses</h4>
                <h4 className="collapsed-nav-links">Balls</h4>
                <h4 className="collapsed-nav-links">Watched</h4>
                <h4 className="collapsed-nav-links">Gloves</h4>
                <h4 className="collapsed-nav-links">All Accessories</h4>
                <h4 className="collapsed-nav-links">Sale Accessories</h4>
            </ul>
            <ul className="collapsed-link-blocks">
                <h4 className="main-links" >SPORTS</h4>
                <br />
                <h4 className="collapsed-nav-links">Running</h4>
                <h4 className="collapsed-nav-links">Soccer</h4>
                <h4 className="collapsed-nav-links">Basketball</h4>
                <h4 className="collapsed-nav-links">Football</h4>
                <h4 className="collapsed-nav-links">Skateboarding</h4>
                <h4 className="collapsed-nav-links">Training</h4>
                <h4 className="collapsed-nav-links">Outdoor</h4>
                <h4 className="collapsed-nav-links">Tennis</h4>
                <h4 className="collapsed-nav-links">Golf</h4>
                <h4 className="collapsed-nav-links">Hockey</h4>
                <h4 className="collapsed-nav-links">Baseball</h4>
                <h4 className="collapsed-nav-links">Lacrosse</h4>
                <h4 className="collapsed-nav-links">Volleyball</h4>
                <h4 className="collapsed-nav-links">Weightlifting</h4>
                <h4 className="collapsed-nav-links">College Gear</h4>
            </ul>
        </div>
        </footer>
    )
}

export default MenNav