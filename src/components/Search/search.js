import React from "react";
import PropTypes from "prop-types";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch/dom";
import Hit from "./Hit";
const Sidebar = () => (
    <div></div>
)

const Search = () => (
    <InstantSearch
        appId="latency"
        apiKey="3d9875e51fbd20c7754e65422f7ce5e1"
        indexName="bestbuy"
    >
        {/* Search widgets will go there */}
        <SearchBox translations={{ placeholder: "Search" }} />
        <Hits hitComponent={Hit} />
        <main>
            <Sidebar />
        </main>
    </InstantSearch>
);


export default Search;