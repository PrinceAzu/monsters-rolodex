import React from "react";
import "./SearchBox.css";

const searchBox = ({placeholder, onChangeHandler}) => {
    return (
        <input className="SearchBox" type="search" placeholder={placeholder} onChange={onChangeHandler}/>
    )
}

export default searchBox;