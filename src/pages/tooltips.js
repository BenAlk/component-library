import React from 'react'
import { Tooltip } from "../component-library/ScrimbaComponents"
import "./css/tooltips.css"
import { tooltipData, playgroundCode, importCode, basicCode, advancedCode,  } from "././page-data/tooltipdata"
import { capitalizeFirstLetter } from '../utils/utils'
import ComponentPage from "./component/component-page/component-page-index"

export default function Tooltips() {
    const [exampleColor, setExampleColor] = React.useState("")
    const [exampleVariant, setExampleVariant] = React.useState("")
    const [selectedKey, setSelectedKey] = React.useState(null)

    function handleChange(e, key) {
        setExampleColor(e.color)
        setExampleVariant(e.variant)
        setSelectedKey(key)
    }


/* Generate example tooltips */

    const exampleTooltips = tooltipData.map((item, index) => {
        const isSelected = selectedKey === item.key
        const cellClass = isSelected ? "flash-border" : ""
        return (
            <div key={item.key} className={`${item.color}-${item.variant} example ${cellClass}`} onClick={() => handleChange({color: `${item.color}`, variant: `${item.variant}`}, item.key)}><Tooltip color={item.color} variant={item.variant} disableClose={true}><Tooltip.Popup  customCss={"example-tooltip-visible"}><Tooltip.Title>Tooltip Example</Tooltip.Title><Tooltip.Text>Example tool tips for color schemes.</Tooltip.Text></Tooltip.Popup></Tooltip></div>
        )
    })

/* Generate color and variant headers */
    const colorHeads = tooltipData
        .slice(0, 8)
        .filter((_, index) => index % 2 !== 0) // Filter to keep only odd indices
        .map((item, index) => {
            const isSelected = exampleColor === item.color
            const colorClass = isSelected ? "selected-tooltip" : ""
            return (
                <div key={index} className={`${item.color}-text heading ${colorClass}`}>
                    {capitalizeFirstLetter(item.color)}
                </div>
            );
        });

    const styleHeads = tooltipData.slice(0, 2).map((item, index) => {
        const isSelected = exampleVariant === item.variant
        return (
            <React.Fragment key={index}>
                <div className={`${item.variant}-0 heading ${isSelected ? "selected-tooltip" : ""}`}>{capitalizeFirstLetter(item.variant)}</div>
                <div className={`${item.variant}-1 heading ${isSelected && exampleColor === "gray" ? "selected-tooltip" : ""}`}>{capitalizeFirstLetter(item.variant)}</div>
                <div className={`${item.variant}-2 heading ${isSelected && exampleColor === "blue" ? "selected-tooltip" : ""}`}>{capitalizeFirstLetter(item.variant)}</div>
                <div className={`${item.variant}-3 heading ${isSelected && exampleColor === "purple" ? "selected-tooltip" : ""}`}>{capitalizeFirstLetter(item.variant)}</div>
                <div className={`${item.variant}-4 heading ${isSelected && exampleColor === "green" ? "selected-tooltip" : ""}`}>{capitalizeFirstLetter(item.variant)}</div>
            </React.Fragment>
        )
    })

/* Re-factor basic code for dynamic color and style options */

const exampleBasicCode =  basicCode(exampleColor, exampleVariant)

    return (
        <div className="example-tooltip-container">
            <div className="example-intro">
                <h1>Welcome to the tooltips section, below are a list of the different pre-set styles and colors available.</h1>
            </div>
                <div className="example-container">
                {exampleTooltips}
                {colorHeads}
                {styleHeads}
            </div>

        {/* Import Code Space*/}
            <ComponentPage level={"import"} scope={{Tooltip}} componentCode={importCode}>
                <ComponentPage.Text>
                    To use this component please use the following code to import the Tooltip component.
                </ComponentPage.Text>
                <ComponentPage.Playground />
            </ComponentPage>

        {/* Basic Code Space*/}
            <ComponentPage level={"basic"} scope={{Tooltip}} componentCode={exampleBasicCode}>
                <ComponentPage.Text>
                    Add the following code to use the Tooltip component. Click on your chosen style above to alter the code for your selected style.                
                    </ComponentPage.Text>
                <ComponentPage.Playground />
            </ComponentPage>

        {/* Advanced Code Space*/}

            <ComponentPage level={"advanced"} scope={{Tooltip}} componentCode={advancedCode}>
                <ComponentPage.Text>
                    For further customization there is a prop which can be passed.
                    <br /><br /> <span className="prop-name">Style</span> - Use basic inline css styling, make sure to pass as an object, this can be used on its own or in combination with the basic props.
                </ComponentPage.Text>
                <ComponentPage.Playground />
            </ComponentPage>

        {/* Code Playground Space*/}

            <ComponentPage level={"playground"} scope={{Tooltip}} componentCode={playgroundCode}>
                <ComponentPage.Text>
                    Try out your own code in the editor below and see the output.
                </ComponentPage.Text>
                <ComponentPage.Playground />
            </ComponentPage>
        </div>
    )
}