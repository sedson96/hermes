import React from "react"
import "./SecondaryFeature.scss"

function SecondaryFeature (props) {
    return (
        <section className="secondary-feature">
            <div className="sec-feature-container">
                <div className="image-container">
                    <div className="image">
                        <video className="video" loop autoPlay playsInline src="https://www.adidas.com/5280/campaigns/running-fw19-bb-boost-ub19-educate-hp/running-fw19-bb-boost-ub19-holistic-hp-mh-small-2-d.mp4"></video>
                    </div>   
                </div>
                <div className="text">
                </div>
            </div>
        </section>
    )
}

export default SecondaryFeature