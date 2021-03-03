import React, { useState, useEffect } from "react";
import "../styles/components/NextDays.scss";

function NextDays({ latitude, longitude }) {
    const [dataApi, setDataApi] = useState([])

    function getData() {
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=34b72b35d1bb464990570215212802&q=${latitude},${longitude}&days=5`)
            .then(data => data.json())
            .then(data => { setDataApi(data.forecast.forecastday) })
            .catch(err => console.error(err))
    }
    useEffect(() => {
        getData()
    }, [latitude, longitude])
    return (
        <section className="NextDays">
            {dataApi.length > 1 ? (dataApi.map(element => {
                return (
                    <article className="NextDays__item" key={element.date}>
                        <p><strong>Day: </strong>{element.date}</p>
                        <img src={element.day.condition.icon.replace("64", "128").replace("64", "128")} alt={element.day.condition.text} />
                        <p>{element.day.condition.text}</p>
                        <div>
                            <p>Min temp: {Math.round(element.day.mintemp_c)}°C</p>
                            <p>Max temp: {Math.round(element.day.maxtemp_c)}°C</p>
                        </div>
                    </article>)
            })) : (
                    <article className="NextDays__item">
                        <p><strong>Day: </strong></p>
                        <img alt="" />
                        <p>Day weather</p>
                        <div>
                            <p>Min temp:°C</p>
                            <p>Max temp:°C</p>
                        </div>
                    </article>
                )}
        </section>

    )
}


export default NextDays