import React from 'react';

import Header from './partials/Header';
import Search from './partials/Search';
import Footer from './partials/Footer';

const SearchResults = (props) => {

    return (


            <main>

                    <h1>Search Results for "{props.query}"</h1>

            </main>

    );
}

export default SearchResults;
