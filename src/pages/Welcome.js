import React from "react"
import "./css/welcome.css"
import { Link } from "react-router-dom"
export default function Welcome() {
    return (
        <div className="welcome-container">
            <img className="inline-image-1" src="https://img.freepik.com/free-photo/html-css-collage-concept_23-2150061955.jpg?w=996&t=st=1719521455~exp=1719522055~hmac=76907d4acacc1b75e1816256b0aa9abcae7d9e3bb5d1e8c49225c93d8aac5af0" alt="Collage of html-code and a hand-writing" />
            <img className="inline-image-2" src="https://img.freepik.com/premium-photo/programmer-is-working-code-dark-room-only-light-comes-from-computer-screen-image-is-full-mystery-intrigue_14117-141158.jpg?w=996" alt="Computer screen with source code visible" />
            <h1>The Scrimba Component Library is your go-to resource for a versatile and easy-to-use collection of React components. Designed with developers in mind, our library aims to streamline your workflow and enhance your projects with beautifully crafted UI elements.</h1>
            <h2 className="list1">What's Inside?
                <ul>
                    <li><span>Badges:</span> Highlight key information and statuses with our customizable badges.</li>
                    <br />
                    <li><span>Banners:</span> Create eye-catching banners to draw attention to important messages.</li>
                    <br />
                    <li><span>Cards:</span> Present content in a visually appealing and organized manner with our card templates.</li>
                    <br />
                    <li><span>Testimonials:</span> Showcase user feedback and reviews with elegantly designed testimonial templates.</li>
                    <br />
                    <li><span>Toasts:</span> Provide quick, unobtrusive notifications to your users with our toast alerts.</li>
                    <br />
                    <li><span>Tooltips:</span> Add informative tooltips to enhance user experience and provide additional context.</li>
                </ul>
            </h2>
            <h2 className="list2">Why Choose Our Library?
                <ul>
                    <li><span>User-Friendly:</span> Our components are designed to be easy to integrate and use in your projects.</li>
                    <br />
                    <li><span>Customizable:</span> Tailor each component to match your specific needs and brand identity.</li>
                    <br />
                    <li><span>Responsive:</span> Ensure your UI looks great on all devices with our responsive designs.</li>
                    <br />
                    <li><span>Consistent:</span> Maintain a consistent look and feel across your application with our cohesive component styles.</li>
                </ul>
            </h2>
            <div className="welcome-link">
                <p>We invite you to explore our library, experiment with the components, and elevate your projects to the next level. Happy coding!</p>
                <Link 
                    to={"/Gallery"}
                >
                    <div className="welcome-link-button">COMPONENT GALLERY</div>
                </Link>
                <svg className="arr1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 733.58 515.77" width="150px" height="150px" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
                    <path d="M1293.23,618.2L1091.6,527.66l45.4,84.15c0,0-177,86.19-389,23.19-57-27-196-100-163-356-109,623,566.51,403.92,566.51,403.92l-10,96.77L1293.23,618.2Z" transform="translate(-568.099976-278.140015)" fill="none" stroke="#fff" strokeWidth="8" strokeMiterlimit="10"/>
                </svg>                
                <svg className="arr2"id="ezhkeHp43RT1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 733.58 515.77" height="150px" width="150px" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
                    <path d="M1293.23,618.2L1091.6,527.66l45.4,84.15c0,0-177,86.19-389,23.19-57-27-196-100-163-356-109,623,566.51,403.92,566.51,403.92l-10,96.77L1293.23,618.2Z" transform="matrix(-1 0 0 1 1301.391908-271.46)" fill="none" stroke="#fff" strokeWidth="8" strokeMiterlimit="10"/>
                </svg>
            </div>
        </div>
    )
}