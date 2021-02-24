import React, { useState } from "react"
import "../styles/components/searchPlaces.scss"

function SearchPlaces() {
    return (
        <section className="searchPlaces">
            <h5 className="searchPlaces__title">Set your city</h5>
            <input className="searchPlaces__input" type="text" placeholder="Search your city" />
            <ul className="searchPlaces__ul">

            </ul>
        </section>
    )
}

export default SearchPlaces