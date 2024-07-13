import React from 'react'
import { Toast, ToastTrigger } from '../component-library/ScrimbaComponents'
import "./css/toasts.css"
import { toastData, playgroundCode, importCode, basicCode, advancedCode } from "./page-data/toastdata.js"
import { capitalizeFirstLetter } from '../utils/utils'
import Success from "../component-library/toast/images/success.png"
import Info from "../component-library/toast/images/info.png"
import Attention from "../component-library/toast/images/warning.png"
import Error from "../component-library/toast/images/error.png"
import ComponentPage from './component/component-page/component-page-index'
export default function Toasts () {
    const [exampleVariant, setExampleVariant] = React.useState("")
    const [exampleHead, setExampleHead] = React.useState("")
    const [exampleText, setExampleText] = React.useState("")

    const toastIcons = {
        success: Success,
        info: Info,
        attention: Attention,
        error: Error,
    }

function handleChange(e) {
    setExampleVariant(e.variant)
    setExampleHead(e.title)
    setExampleText(e.text)
}

/* Generate example toasts */

const exampleToasts =  toastData.map((toast, index) => (
    <div key={index} className={`toast toast-${toast.variant}`} onClick={() => handleChange({variant: `${toast.variant}`, title: `${toast.title}`, text: `${toast.text}`})}>
        <div className="toast-icon"><img src={toastIcons[toast.variant]} alt={`${toast.variant} logo`}/></div>
        <div className="toast-title">{toast.title}</div>
        <div className="toast-text">{toast.text}</div>
        <div className="toast-close">X</div>
    </div>
))

/* Generate Variant Headers */
const variantHeads = toastData.slice(0, 4).map((item, index) => {
    return (
        <React.Fragment key={index}>
            <div className={`${item.variant}-text heading`}>{capitalizeFirstLetter(item.variant)}</div>
        </React.Fragment>
    )
})

const exampleBasicCode =  basicCode(exampleVariant, exampleHead, exampleText)


return (
    <div className="example-toast-container">
            <div className="example-intro">
                <h1>Welcome to the toasts section, below are a list of the different pre-set styles available.</h1>
            </div>
                <div className="example-container">
                {exampleToasts}
                {variantHeads}
            </div>
                    {/* Import Code Space*/}
                    <ComponentPage level={"import"} scope={{Toast}} componentCode={importCode}>
                <ComponentPage.Text>
                    To use this component please use the following code to import the Badge component.
                </ComponentPage.Text>
                <ComponentPage.Playground />
            </ComponentPage>

        {/* Basic Code Space*/}
            <ComponentPage level={"basic"} scope={{Toast}} componentCode={exampleBasicCode}>
                <ComponentPage.Text>
                    Add the following code to use the Toast component. Click on your chosen style above to alter the code for your selected style. You can replace the Trigger Code with any text you wish, or any component to act as the trigger.               
                    </ComponentPage.Text>
                <ComponentPage.Playground />
            </ComponentPage>

        {/* Advanced Code Space*/}

            <ComponentPage level={"advanced"} scope={{Toast}} componentCode={advancedCode}>
                <ComponentPage.Text>
                    For further customization there are custom props that can be passed.
                    <br /><br /> <span className="prop-name">titleStyle</span> and <span className="prop-name">textStyle</span> can be used to change the Title and Text styles respectively, using inline css.<br /> <br /> <span className="prop-name">styleClassName</span> -This can be used to add a specific class to the trigger if you have one ready.<br /><br /> <span className="prop-name">style</span> can be used to add inline css styling.
                </ComponentPage.Text>
                <ComponentPage.Playground />
            </ComponentPage>

        {/* Code Playground Space*/}

            <ComponentPage level={"playground"} scope={{Toast, ToastTrigger}} componentCode={playgroundCode}>
                <ComponentPage.Text>
                    Try out your own code in the editor below and see the output.
                </ComponentPage.Text>
                <ComponentPage.Playground />
            </ComponentPage>
    </div>
)

}