import React from "react";
import Highlights__Item from "./Highlights__Item";
import "../styles/components/highlights.scss";

function Highlights({ wind_mph, humidity, visibility, air_pressure }) {
    return (
        <section className="highlights">
            <h3 className="highlights__title">Today's Highlights</h3>
            <main className="highlights__container">
                <Highlights__Item title="Wind status" amount={wind_mph} span="mph" footer="WSW" />
                <Highlights__Item title="Humidity" amount={humidity} span="%" />
                <Highlights__Item title="Visibility" amount={visibility} span="km" footer={true} />
                <Highlights__Item title="Air Pressure" amount={air_pressure} span="mb" footer={true} />
            </main>
        </section>

    )
}



export default Highlights