import React, { useState } from "react";
import SearchPlaces from "./SearchPlaces";

import "../styles/components/header.scss";

function Header({ getData, searchData, city }) {
    const [show, showPlaces] = useState(false);
    return (
        <>
            <header>
                <i className={show ? "header__places--active" : "header__places"} onClick={() => !show ? showPlaces(true) : showPlaces(false)}>
                    <span>Search for Places</span>
                    <div className="closes closes__1"></div>
                    <div className="closes closes__2"></div>
                </i>
                <button className="header__location" onClick={() => getData()}>

                </button>

            </header>
            {
                show && (
                    <SearchPlaces searchData={searchData} city={city} />
                )
            }
        </>
    )
}

export default Header