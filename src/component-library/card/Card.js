import React from 'react'
import "./Card.css"
import logo from "./images/logo.png"

export default function Card({children, title, cardLogo, logoDescription}) {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-logo"><img src={logo} alt={logoDescription} /></div>
                    <h1 className="card-title">{title}</h1>
                    <div className="content">{children}</div>
            </div>
        </div>
    )
}