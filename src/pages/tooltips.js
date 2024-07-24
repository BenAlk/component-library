import React from 'react'
import { Tooltip } from "../component-library/ScrimbaComponents"
import "./css/tooltips.css"
import { tooltipData, playgroundCode, importCode, basicCode, advancedCode,  } from "././page-data/tooltipdata"
import { capitalizeFirstLetter } from '../utils/utils'
import ComponentPage from "./component/component-page/component-page-index"

export default function Tooltips() {
    const [exampleColor, setExampleColor] = React.useState("")
    const [exampleVariant, setExampleVariant] = React.useState("")

    function handleChange(e) {
        setExampleColor(e.color)
        setExampleVariant(e.variant)
    }


/* Generate example tooltips */

    const exampleTooltips = tooltipData.map((item, index) => {
        return (
            <div key={item.key} className={`${item.color}-${item.variant} example`} onClick={() => handleChange({color: `${item.color}`, variant: `${item.variant}`})}><Tooltip color={item.color} variant={item.variant} /* style={customeTooltipStyle} */>Example</Tooltip></div>
        )
    })

/* Generate color and variant headers */
    const colorHeads = tooltipData.slice(0, 8).map((item, index) => {
        return (
            <div key={index} className={`${item.color}-text heading`}>{capitalizeFirstLetter(item.color)}</div>
        )
    })

    const styleHeads = tooltipData.slice(7, 9).map((item, index) => {
        return (
            <React.Fragment key={index}>
                <div className={`${item.variant} heading`}>{capitalizeFirstLetter(item.variant)}</div>
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