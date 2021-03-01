import React from "react"

function Highlights__Item({ title, amount, span, footer }) {
    return (
        <article className="highlights__item">
            <p>{title}</p>
            <h3 className="item__amount"><strong>{amount}</strong> <span>{span}</span></h3>
            {footer ? (<div className="item__footer"> {footer}</div>) : (
                <progress value={amount} max="100" />
            )}

        </article>
    )
}


export default Highlights__Item