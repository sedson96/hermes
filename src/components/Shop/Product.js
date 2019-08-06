import React from "react" 
import "./Product.scss"
import classnames from "classnames"
import useDisplayToggle from "../../hooks/useDisplay";

function Product (props) {
    let { show, setTrue, setFalse } = useDisplayToggle()

    const {shoe} = props

    let secondaryImages = [<div className="cover"><img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/77a3605c64334291a5d6a99b010f50a3_9366/Adizero_8.0_Cleats_Black_BB7704_01_standard.jpg" alt=""/></div>,
                            <div className="cover"><img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/77a3605c64334291a5d6a99b010f50a3_9366/Adizero_8.0_Cleats_Black_BB7704_01_standard.jpg" alt=""/></div>,
                            <div className="cover"><img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/77a3605c64334291a5d6a99b010f50a3_9366/Adizero_8.0_Cleats_Black_BB7704_01_standard.jpg" alt=""/></div>,
                            <div className="cover"><img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/77a3605c64334291a5d6a99b010f50a3_9366/Adizero_8.0_Cleats_Black_BB7704_01_standard.jpg" alt=""/></div>,
                            ]

    return (
        <>
        <article onMouseOver={setTrue} onMouseLeave={setFalse} className="product-card">
            <img src={shoe._links.images_large[0].href} alt="Adizero 8.0 Cleats"/>
            {/* {show && <div className={classnames("color-options-container")} >{secondaryImages}</div>} */}
            <div className={classnames("product-details", {"product-details-hover": show})}>
                <h2>{shoe.subtitle}</h2>
                <div>
                    <h1>{shoe.product_name}</h1>
                    <h1>{shoe.original_price}</h1>
                </div>
                <h1>5 colors</h1>
            </div>
        {show &&
        <article className="detailed-product-card">
            <img src={shoe._links.images_large[1].href} alt="Adizero 8.0 Cleats"/>
            {show && <div className={classnames("color-options-container")} >{secondaryImages}</div>}
            <div className={classnames("product-details", {"product-details-hover": show})}>
                <h2>{shoe.subtitle}</h2>
                <div>
                    <h1>{shoe.product_name}</h1>
                    <h1>{shoe.original_price}</h1>
                </div>
                <h1>5 colors</h1>
            </div>
        </article>
        }
        </article>
        </>
    )
}

export default Product