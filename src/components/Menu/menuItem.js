import React, { Component } from 'react'
import Link from 'gatsby-link'

const CustomPages = ({ node }) => {
    return (
        <li>
            
            <Link to={node.menuName}>{node.menuName}</Link>
        </li>
    )
}
class MainMenu extends Component {
    render() {
        const data = this.props.menu.allContentfulCustomPages
        return (
            <div>
                 <li><Link to="/page-2">page-2</Link></li>
                {data.edges.map((edge) => <CustomPages node={edge.node} />)}

            </div>
        )
    }
}

export default MainMenu