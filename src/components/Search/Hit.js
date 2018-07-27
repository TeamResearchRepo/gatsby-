// First, we need to add the Hits component to our import
import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import {
   
    Highlight
  } from 'react-instantsearch-dom';

const Hit = props => {
    const { hit } = props;
    console.log(props)
    return (
        <div className="hit">
            <div className="hit-image">
                <img src={hit.image} /></div>
            {/* <Link to={hit.name}>{hit.name}</Link> */}
            <Highlight attribute="name" hit={hit} />
        </div>
    );
};
// function Search() {
//   return (
//     <div className="container">
//       <Hits />
//     </div>
//   );
// }

Hit.propTypes = {
    hit: PropTypes.object.isRequired
};

export default Hit;