import React from "react" 
import Product from "./Product"
import "./Product.scss"
import { Query } from "react-apollo"
import { GET_MENS_SHOES } from "../../query";
 
function Products (props) {
    return (
        <Query query={GET_MENS_SHOES}>
            {({loading, error, data}) => {
                if (loading) return <h1>Loading</h1>
                else if (error) return <h1>An error happened</h1>
                else  {
                    let displayProducts = data.Shoes._embedded.products.map(product => {
                        return <Product shoe={product} />
                    })
                    return (<div className="products-container" >
                        {displayProducts}
                    </div>
                    )
                }

            }}
        </Query>
    )

}

export default Products