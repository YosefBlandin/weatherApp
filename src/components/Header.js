import React, { useState } from "react";
import SearchPlaces from "./SearchPlaces";

import "../styles/components/header.scss";

function Header({ getData }) {
    const [show, showPlaces] = useState(false);
    return (
        <>
            <header>
                <i className="header__places" onClick={() => !show ? showPlaces(true) : showPlaces(false)}>
                    Search for Places
            </i>
                <button className="header__location" onClick={() => getData()}>

                </button>

            </header>
            {
                show && (
                    <SearchPlaces />
                )
            }
        </>
    )
}

export default Header