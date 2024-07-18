import React from 'react'
import Welcome from "./Welcome"
import Gallery from "./Gallery"
import Banners from "./banners"
import Badges from "./badges"
import Toasts from "./toasts"
import Cards from "./cards"
import Testimonials from "./testimonials"
import "./css/main.css"

export default function Main() { 
    return (
        <div className="main-container">
            {/* <Welcome /> */}
            {/* <Gallery /> */}
            {/* <Badges /> */}
            {/* <Banners /> */}
            {/* <Toasts /> */}
            {/* <Cards /> */}
            <Testimonials />
        </div>)
}