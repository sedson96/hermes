import React from "react" 
import "./LandingFeatured.scss"

function LandingFeatured (props) {
    return (
        <section className="featured-container">
            <div className="featured">
                <article className="featured-item">
                    <div>
                        <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/DON_Teaser_2X_M_T_2_tcm221-377893.jpg"/>
                    </div>
                </article>
                <article className="featured-item">
                    <div>
                        <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/HP_Supercourt_Teaser_960x480_tcm221-377306.jpg"/>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default LandingFeatured