import React, { useState, useEffect } from "react"
import "../styles/components/searchPlaces.scss"

function SearchPlaces({ searchData, city }) {
    let [value, setValue] = useState("");

    useEffect(() => {
        value.length > 3 ? searchData(value) : false
        console.log(value, city)
    }, [value])
    return (

        <section className="searchPlaces">
            <input onChange={() => setValue(event.target.value)} className="searchPlaces__input" type="text" placeholder="Search your city" />
            <ul className="searchPlaces__ul">
                {city.map(e => {
                    return (
                        <li className="searchPlaces__li" key={e.id}>{e.name}</li>
                    )
                })}
            </ul>
        </section>



    )
}

export default SearchPlaces