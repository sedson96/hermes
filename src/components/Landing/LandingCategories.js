import React from "react" 
import "./LandingCategories.scss"

function LandingCategories(props) {
    return (
        <section className="categories-container">
            <div className="categories">
                <div className="category-item">
                    <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/C77124_Desktop2_tcm221-376897.jpg" alt="Shoes"/>
                    <span>SHOES</span>
                </div>
                <div className="category-item">
                    <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/CW1256_Desktop_tcm221-375311.jpg" alt="Shoes"/>
                    <span>CLOTHING</span>
                </div>
                <div className="category-item">
                    <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/B37705_Desktop2_tcm221-376896.jpg" alt="Shoes"/>
                    <span>BEST SELLERS</span>
                </div>
                <div className="category-item">
                    <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/EG2936_Desktop2_tcm221-376898.jpg" alt="Shoes"/>
                    <span>NEW ARRIVALS</span>
                </div>
            </div>
        </section>
    )
}

export default LandingCategories