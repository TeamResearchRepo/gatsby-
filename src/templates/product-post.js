import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ProductPost extends Component {
    render() {
        console.log(this.props)
        const { productId, productName, productDescription } = this.props.data.contentfulProduct
        return (
            <div>
                <h1 style={{
                    borderBottom: '1px solid #CCC',
                    paddingBottom: '0.5rem'
                }}>
                    {productId} .{productName}
                </h1>
                {productDescription.productDescription}

            </div>
        )
    }
}

ProductPost.PropTypes = {
    data: PropTypes.object.isRequired
}

export default ProductPost

export const pageQuery = graphql`
    query productPostQuery($productName: String!){
        contentfulProduct(productName: {eq: $productName}) {
            productId
            productName
            productDescription {
                productDescription 
            }
        }
    }
`