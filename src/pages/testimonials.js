import React from 'react'
import { Testimonial } from '../component-library/ScrimbaComponents'
import { testimonialData, playgroundCode, importCode, basicCode } from "./page-data/testimonialdata.js"
import ComponentPage from './component/component-page/component-page-index'
import "./css/testimonials.css"
import { capitalizeFirstLetter } from '../utils/utils.js'
export default function Testimonials () {

    const [exampleStyle, setExampleStyle] = React.useState("")

    function handleChange(e) {
        setExampleStyle(e.style)
    }

    /* Generate example testimonials */    
    const exampleTestimonials = testimonialData.map((item, index) => {
        return (
            <div key={`${item.style}-${index}`} className={`${item.style} example`} onClick={() => handleChange({style: `${item.style}`})}><Testimonial person={item.person} style={item.style}>Body of the testimonial goes here</Testimonial></div>
        )
    })

    /* Generate Style Headers */
    const styleHeads = testimonialData.map((item, index) => {
        return (
            <React.Fragment key={index}>
                <div className={`${item.style} heading`}>{capitalizeFirstLetter(item.style)}</div>
            </React.Fragment>
        )
    })

    /* Re-factor basic code for dynamic color and style options */

    const exampleBasicCode =  basicCode(exampleStyle)

    return (
        <div className="example-testimonial-container">
            <div className="example-intro">
                <h1>Welcome to the testimonial section, below are examples of the preset testimonial styles.</h1>
            </div>
            <div className="example-container">
            {exampleTestimonials}
            {styleHeads}
            </div>
            <ComponentPage level={"import"} scope={{Testimonial}} componentCode={importCode}>
                <ComponentPage.Text>
                    To use this component please use the following code to import the Testimonial component.
                </ComponentPage.Text>
                <ComponentPage.Playground />
            </ComponentPage>
            
            <ComponentPage level={"basic"} scope={{Testimonial}} componentCode={exampleBasicCode}>
                <ComponentPage.Text>
                    The testimonial component has two styles which are responsive. Style 1 is with a picture, Style 2 is without a picture, but a brand logo instead. Click on your preferred style above to adjust the code in the Basic code playground.
                </ComponentPage.Text>
                <ComponentPage.Playground />
            </ComponentPage>

            <ComponentPage level={"playground"} scope={{Testimonial}} componentCode={playgroundCode}>
                <ComponentPage.Text>
                    Try out your own code in the editor below and see the output.
                </ComponentPage.Text>
                <ComponentPage.Playground />
            </ComponentPage>
        </div>
    )
}

