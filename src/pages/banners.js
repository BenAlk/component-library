import React from 'react'
import { Banner } from "../component-library/ScrimbaComponents"
import { capitalizeFirstLetter } from '../utils/utils.js'
import { bannerData, playgroundCode, importCode, basicCode, advancedCode, customBannerStyle } from "./page-data/bannerdata.js"
import ComponentPage from './component/component-page/component-page-index'
import "./css/banners.css"

export default function Banners () {
    const [exampleBannerType, setExampleBannerType] = React.useState("")
    const [exampleVariant, setExampleVariant] = React.useState("")
    const [selectedKey, setSelectedKey] = React.useState(null)

    function handleChange(e, key) {
        setExampleBannerType(e.bannerType)
        setExampleVariant(e.variant)
        setSelectedKey(key)
    }

    
    const exampleBanners = bannerData.map(item => {
        const isSelected = selectedKey === item.key
        const cellClass = isSelected ? "flash-border" : ""
        return (
            <div key={item.key} className={`${item.variant}-${item.bannerType} example ${cellClass}` } onClick={() => handleChange({bannerType: `${item.bannerType}`, variant: `${item.variant}`}, item.key)}>
                <Banner variant={item.variant} bannerType={item.bannerType} style={customBannerStyle}>
                    <Banner.Head>
                        {item.head}
                    </Banner.Head>
                    <Banner.Text>
                        {item.text}
                    </Banner.Text>
                </Banner>
            </div>
        )
    })

    

    const bannerVariantHeads = bannerData.slice(3,5).map((item, index) => {
        const isSelected = exampleVariant === item.variant
        return (<React.Fragment key={`variant-${index}`}>
            <div key={`head-${index}-1`} className={`${item.variant} heading ${isSelected ? "selected-banner" : ""}`}>{capitalizeFirstLetter(item.variant)}</div>
            <div key={`head-${index}-2`} className={`${item.variant}1 heading ${isSelected && exampleBannerType === "success" ? "selected-banner" : ""}`}>{capitalizeFirstLetter(item.variant)}</div>
            <div key={`head-${index}-3`} className={`${item.variant}2 heading ${isSelected && exampleBannerType === "info" ? "selected-banner" : ""}`}>{capitalizeFirstLetter(item.variant)}</div>
            <div key={`head-${index}-4`} className={`${item.variant}3 heading ${isSelected && exampleBannerType === "attention" ? "selected-banner" : ""}`}>{capitalizeFirstLetter(item.variant)}</div>
            <div key={`head-${index}-5`} className={`${item.variant}4 heading ${isSelected && exampleBannerType === "error" ? "selected-banner" : ""}`}>{capitalizeFirstLetter(item.variant)}</div>
            </React.Fragment>
        )
    })

    const bannerTypeHeads = bannerData.slice(0,4).map((item, index) => {
            const isSelected = exampleBannerType === item.bannerType
            const typeClass = isSelected ? "selected-banner" : ""
        return (
            <div key={`type-${index}`} className={`${item.bannerType}-text heading ${typeClass}`}>{capitalizeFirstLetter(item.bannerType)}</div>
        )
    })

    const exampleBasicCode =  basicCode(exampleBannerType, exampleVariant)

return (
        <div className="example-banner-container">
            <div className="example-intro">
                <h1>Welcome to the banner section, below are a list of the different pre-set styles and colors available.</h1>
            </div>
            <div className="example-container">
                {exampleBanners}
                {bannerVariantHeads}
                {bannerTypeHeads}
            </div>

            {/* Import Code Space*/}
            <ComponentPage level={"import"} scope={{Banner}} componentCode={importCode}>
                <ComponentPage.Text>
                    To use this component please use the following code to import the Badge component.
                </ComponentPage.Text>
                <ComponentPage.Playground />
            </ComponentPage>

        {/* Basic Code Space*/}
            <ComponentPage level={"basic"} scope={{Banner}} componentCode={exampleBasicCode}>
                <ComponentPage.Text>
                    Add the following code to use the Badge component. Click on your chosen style above to alter the code for your selected style.                
                    </ComponentPage.Text>
                <ComponentPage.Playground />
            </ComponentPage>

        {/* Advanced Code Space*/}

            <ComponentPage level={"advanced"} scope={{Banner}} componentCode={advancedCode}>
                <ComponentPage.Text>
                    For further customization there is a couple of props which can be passed.
                    <br /><br /> <span className="prop-name">style, headStyle & textStyle</span> - Using basic inline css styling, <span className="prop-name">style</span> can be used to change the background color,<span className="prop-name">headStyle</span> can be used to change the Head text, and <span className="prop-name">textStyle</span> can be used to change the main text style. All of these props should passed through the top-level Banner component.<br /><br /> Combine this with the basic components to choose your icon style, and single or multi line banners.
                </ComponentPage.Text>
                <ComponentPage.Playground />
            </ComponentPage>

        {/* Code Playground Space*/}

            <ComponentPage level={"playground"} scope={{Banner}} componentCode={playgroundCode}>
                <ComponentPage.Text>
                    Try out your own code in the editor below and see the output.
                </ComponentPage.Text>
                <ComponentPage.Playground />
            </ComponentPage>
        </div>
    )
}