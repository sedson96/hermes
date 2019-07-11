import React from "react"
import "./TopHead.scss"

function TopHead (props) {
    return (
        <section className="top-section">
            <div className="top-image">
                <picture className="performance-item">
                    <source media="(min-width: 960px)" srcSet="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/running-fw19-pb-tease-clp-mh-medium-d_tcm221-366304.jpg" />
                    <source media="(min-width: 600px)" srcSet="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/running-fw19-pb-tease-clp-mh-medium-t_tcm221-366306.jpg"/>
                    <source srcSet="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/running-fw19-pb-tease-clp-mh-medium-m_tcm221-366305.jpg"/>
                    <img id="tcm:221-366310" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/running-fw19-pb-tease-clp-mh-medium-d_tcm221-366304.jpg" alt="pic" className="performance-item" data-inject_ssr_performance_instrument="" data-di-id="#tcm:221-366310"/>
                </picture>
            </div>
                <aside className="top-content">
                    <h1>PULSEBOOST HD LTD</h1>
                    <h2>Any surface. Any Direction. Boost HD.</h2>
                    <div className="top-buttons">
                        {/* <div className="top-button"><a>SHOP NOW</a></div>
                        <div className="top-button">LEARN MORE</div> */}
                    </div>
                </aside>
        </section>
    )
}

export default TopHead