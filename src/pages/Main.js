import React from 'react'
import Welcome from "./Welcome"
import Gallery from "./Gallery"
import Banners from "./banners"
import Badges from "./badges"
import "./css/main.css"

export default function Main() { 
    return (
        <div className="main-container">
            {/* <Welcome /> */}
            {/* <Gallery /> */}
            {/* <Badges /> */}
            <Banners />
        </div>)
}