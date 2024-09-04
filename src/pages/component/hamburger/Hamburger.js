import React from "react"
import "./Hamburger.css"

export default function Hamburger({isOpen, setIsOpen}){

    return (
        <div className={`hamburger-menu ${isOpen ? "rotate-90" : ""}`}  onClick={() => setIsOpen(!isOpen)}>
            <svg className="hamburger" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_429_11066)">
                    <path className="hamburger-path" d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" stroke="#68bbdb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                    <clipPath id="clip0_429_11066">
                        <rect width="24" height="24" fill="white" transform="translate(0 0.000915527)"/>
                    </clipPath>
                </defs>
            </svg>
        </div>
    )
}