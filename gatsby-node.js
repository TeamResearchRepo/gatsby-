/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

 const path = require('path')

exports.createPages = ({graphql, boundActionCreators}) => {
    const {createPage} = boundActionCreators
    return new Promise((resolve, reject) => {
        const productPostTemplate = path.resolve('src/templates/product-post.js')
        resolve(
            graphql(`
                {
                    allContentfulProduct (limit:100) {
                        edges {
                            node {
                                id
                                productId
                                productName
                                productDescription {
                                    productDescription
                                }
                            }
                        }
                    }
                }
            `).then((result) => {
                if (result.errors) {
                    reject(result.errors)
                }
                result.data.allContentfulProduct.edges.forEach((edge) => {
                    createPage ({
                        path: edge.node.productName,
                        component: productPostTemplate,
                        context: {
                            productName: edge.node.productName,
                            productDescription : edge.node.productDescription.productDescription
                        }
                    })
                })
                return
            })
        )
    })
}