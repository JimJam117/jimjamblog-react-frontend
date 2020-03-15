import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import SearchResults from '../SearchResults';
 
const Search = (props) => {


    const [search, setSearch] = useState("");


    const handleChange = (e) => {
        var inputValue = e.target.value;
        setSearch(e.target.value);

        //console.log("this is the search: " + search + " : " + inputValue)

        if(inputValue !== "" && props.display === false) {
            props.setDisplay(true);
        }
        else if (inputValue === "" && props.display === true) {
            props.setDisplay(false);
        }
    }

    return (
        <div>
            <div className="form-group search">
                <form method="POST" action="/search" style={{'display': 'flex', 'justifyContent': 'end'}}>
                    <input type="hidden" name="_token" value="X1U09v2PexYHdViQdW2VLwBFID494f3po6dWLXPZ" />
                    {/* <button aria-label="Search" type="submit" className="searchButton"><i className="fa fa-search" aria-hidden="true"></i></button> */}
                    <div aria-label="Search" type="submit" className="searchButton"><i className="fa fa-search" aria-hidden="true"></i></div>
                    <input type="text" name="query" className="searchInput" id="search" placeholder="Search..." value={props.query} required onChange={(e) => handleChange(e)} />
                    <label style={{'display' : 'none' }} htmlFor="search">Search</label>
                </form>
            </div>
            {search ? <SearchResults query={search} /> : null}
        </div>
    );
}

export default Search;
