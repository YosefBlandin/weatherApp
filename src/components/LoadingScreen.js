import React from "react";
import '../styles/components/loadingScreen.scss';

function LoadingScreen() {
    return (
        <div className="loadingScreen">
            <div className="loadingScreen__circle screen__circle--1"></div>
            <div className="loadingScreen__circle screen__circle--2"></div>
            <div className="loadingScreen__circle screen__circle--3"></div>
        </div>
    )
}

export default LoadingScreen