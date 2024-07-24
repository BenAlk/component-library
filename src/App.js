import "./App.css"
import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import  Layout from "./pages/Layout.js"
import  Welcome from "./pages/Welcome.js"
import  Gallery from "./pages/Gallery.js"
import  Badges from "./pages/badges.js"
import  Banners from "./pages/banners.js"
import  Cards from "./pages/cards.js"
import  Testimonials from "./pages/testimonials.js"
import Tooltips from "./pages/tooltips.js"
import  Toasts from "./pages/toasts.js"
import  ScrollToTop from "./pages/component/ScrollToTop/ScrollToTop.js"

function App () {
    return (
        <div className="App">
            <Router>
            <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Welcome />} />
                        <Route path="/Gallery" element={<Gallery />} />
                        <Route path="/Badges" element={<Badges />} />
                        <Route path="/Banners" element={<Banners />} />
                        <Route path="/Cards" element={<Cards />} />
                        <Route path="/Testimonials" element={<Testimonials />} />
                        <Route path="/Tooltips" element={<Tooltips />} />
                        <Route path="/Toasts" element={<Toasts />} />
                        <Route path="*" element={<div>Page not found</div>} />
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}

export default App