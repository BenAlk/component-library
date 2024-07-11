import React from 'react'
import Quote from "./images/quote.svg"
import Portrait from "./images/ben.jpg"
import Logo from "./images/logo.png"
import dots from "./images/dots.svg"
import "./Testimonial.css"

export default function Testimonial({children, person, type}) {

    // const imgUrl = `url(${Portrait})`

    return (
    <>  {type === "picture" ?
        (<div className="testimonial">
            <img className="testimonial-image" src={Portrait} alt="Portrait of testimonial" />
            <div className="color-box"></div>
            <div className="testimonial-content">
                <img src={Quote} alt="quotation mark" />
                <div className="testimonial-quote">{children}</div>
                <div>
                    <h1 className="testimonial-person">{person.name}</h1>
                    <p className="testimonial-title">{person.title}</p>
                </div>
            </div>
        </div> ): type === "plain" ?
        (<div className="testimonial-plain">
            <div className="testimonial-plain-content-container">
            <img src={Logo} alt="Workcation Logo" />
                <h1 className="testimonial-plain-quote">{`"${children}"`}</h1>
                <div className="testimonial-plain-contact">
                    <span className="testimonial-plain-name">{person.name}</span><span className="testimonial-plain-divider hidden"> / </span><span className="testimonial-plain-title">{person.title}</span>
                </div>
            </div>
            <img className="dots" src={dots} alt="decorative dots" />
        </div>) :
        <div>error displaying testimonial, please check props</div>
}
    </>
    )
}