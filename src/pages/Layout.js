import React from "react"
import "./css/layout.css"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

export default function Layout() {
    return (
        <div className="container">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}