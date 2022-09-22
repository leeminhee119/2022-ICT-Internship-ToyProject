import React from "react";
import { searchBar } from "./styled-components/style";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = () => {
    return (
        <>
        <searchBar.Box>
            <input style={{color: '#fff'}}></input>
            <FontAwesomeIcon icon={ faMagnifyingGlass } />
        </searchBar.Box>
        </>
    )    
}
export default SearchBar;