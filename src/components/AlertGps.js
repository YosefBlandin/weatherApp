import React, { useState } from "react";
import "../styles/components/alertGps.scss";



function AlertGps({ error }) {
    const [close, setClose] = useState()
    function ShowError() {
        console.error(error)
        return (
            <section className="error">
                <i className="error__close" onClick={() => setClose(true)}>
                    <div className="close close__1"></div>
                    <div className="close close__2"></div>
                </i>
                <p className="error__title">Something was wrong!</p>
                <p className="error__description">You need to allow GPS</p>
            </section>)
    }
    return !close && ShowError()

}


export default AlertGps