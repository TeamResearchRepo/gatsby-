import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CustomPagePost extends Component {
    render() {
        console.log(this.props)
        const { pageContent } = this.props.data.contentfulCustomPages
        if (pageContent != 'undefined') {
            return (

                <div dangerouslySetInnerHTML={{ __html: pageContent.childMarkdownRemark.html }} />

            )
        }
    }
}

CustomPagePost.PropTypes = {
    data: PropTypes.object.isRequired
}

export default CustomPagePost

export const pageQuery = graphql`
    query customPagePostQuery($menuName: String!){
        contentfulCustomPages(menuName: {eq: $menuName}) {
            menuName
            pageContent {
                childMarkdownRemark {
                  html
                }
              }
        }
    }
`