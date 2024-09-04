import React from 'react';
import {Badge} from "../component-library/ScrimbaComponents"
import "./css/badges.css"
import { badgeData, playgroundCode, importCode, basicCode, advancedCode, customBadgeStyle } from "./page-data/badgedata.js"
import { capitalizeFirstLetter } from '../utils/utils.js'
import ComponentPage from './component/component-page/component-page-index'
export default function Badges () {
    const [exampleColor, setExampleColor] = React.useState("")
    const [exampleVariant, setExampleVariant] = React.useState("")
    const [selectedKey, setSelectedKey] = React.useState(null)

    function handleChange(e, key) {
    setExampleColor(e.color)
    setExampleVariant(e.variant)
    setSelectedKey(key)
}

/* Generate example badges */    
    const exampleBadges = badgeData.map(item => {
        const isSelected = selectedKey === item.key
        const cellClass = isSelected ? "flash-border" : ""
        return (
            <div key={item.key} className={`${item.color}-${item.style} example ${cellClass}`} onClick={() => handleChange({color: `${item.color}`, variant: `${item.style}`}, item.key)}><Badge color={item.color} variant={item.style}style={customBadgeStyle}>Example</Badge></div>
        )
    })
/* Generate color and style headers */
    const colorHeads = badgeData.slice(0, 8).map((item, index) => {
        const isSelected = exampleColor === item.color
        const colorClass = isSelected ? "selected-badge" : ""
        return (
            <div key={index}className={`${item.color}-text heading ${colorClass}`}>{capitalizeFirstLetter(item.color)}</div>
        )
    })

    const styleHeads = badgeData.slice(7, 9).map((item, index) => {
        const isSelected = exampleVariant === item.style
        return (
            <React.Fragment key={index}>
                <div className={`${item.style} heading ${isSelected ? "selected-badge" : ""}`}>{capitalizeFirstLetter(item.style)}</div>
                <div className={`${item.style}-left heading ${isSelected && exampleColor === "gray" ? "selected-badge" : isSelected && exampleColor === "yellow" ? "selected-badge" : isSelected && exampleColor === "blue" ? "selected-badge" : isSelected && exampleColor === "purple" ? "selected-badge" : "" }`}>{capitalizeFirstLetter(item.style)}</div>
                <div className={`${item.style}-right heading ${isSelected && exampleColor === "red" ? "selected-badge" : isSelected && exampleColor === "green" ? "selected-badge" : isSelected && exampleColor === "indigo" ? "selected-badge" : isSelected && exampleColor === "pink" ? "selected-badge" : "" }`}>{capitalizeFirstLetter(item.style)}</div>
            </React.Fragment>
        )
    })

/* Re-factor basic code for dynamic color and style options */

    const exampleBasicCode =  basicCode(exampleColor, exampleVariant)

    return (
        <div className="example-badge-container">
            <div className="example-intro">
                <h1>Welcome to the badges section, below are a list of the different pre-set styles and colors available.</h1>
            </div>
                <div className="example-container">
                {exampleBadges}
                {colorHeads}
                {styleHeads}
            </div>

        {/* Import Code Space*/}
            <ComponentPage level={"import"} scope={{Badge}} componentCode={importCode}>
                <ComponentPage.Text>
                    To use this component please use the following code to import the Badge component.
                </ComponentPage.Text>
                <ComponentPage.Playground />
            </ComponentPage>

        {/* Basic Code Space*/}
            <ComponentPage level={"basic"} scope={{Badge}} componentCode={exampleBasicCode}>
                <ComponentPage.Text>
                    Add the following code to use the Badge component. Click on your chosen style above to alter the code for your selected style.                
                    </ComponentPage.Text>
                <ComponentPage.Playground />
            </ComponentPage>

        {/* Advanced Code Space*/}

            <ComponentPage level={"advanced"} scope={{Badge}} componentCode={advancedCode}>
                <ComponentPage.Text>
                    For further customization there is a prop which can be passed.
                    <br /><br /> <span className="prop-name">Style</span> - Use basic inline css styling, make sure to pass as an object, this can be used on its own or in combination with the basic props.
                </ComponentPage.Text>
                <ComponentPage.Playground />
            </ComponentPage>

        {/* Code Playground Space*/}

            <ComponentPage level={"playground"} scope={{Badge}} componentCode={playgroundCode}>
                <ComponentPage.Text>
                    Try out your own code in the editor below and see the output.
                </ComponentPage.Text>
                <ComponentPage.Playground />
            </ComponentPage>
        </div>
    )
}