import gql from "graphql-tag"

export const GET_MENS_SHOES = gql`
    query GET_MENS_SHOES($path: String!) {
            Shoes @rest(type: "Products", path: "products/v2/list?url=men") {
                _embedded @type(name: Shoes){
                    products @type (name: Shoe) {
                        category
                        product_name
                        subtitle
                        original_price
                        _links
                    }
                }
            }
        }

`;