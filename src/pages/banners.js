import React from 'react'
import { Banner } from "../component-library/ScrimbaComponents"
import { capitalizeFirstLetter } from '../utils/utils.js'
import { bannerData, playgroundCode, importCode, basicCode, advancedCode, customBannerStyle } from "./page-data/bannerdata.js"
import ComponentPage from './component/component-page/component-page-index'
import "./css/banners.css"

export default function Banners () {
    const [exampleBannerType, setExampleBannerType] = React.useState("")
    const [exampleVariant, setExampleVariant] = React.useState("")

    function handleChange(e) {
        setExampleBannerType(e.bannerType)
        setExampleVariant(e.variant)
    }

    
    const exampleBanners = bannerData.map(item => {
        return (
            <div key={item.key} className={`${item.variant}-${item.bannerType} example` } onClick={() => handleChange({bannerType: `${item.bannerType}`, variant: `${item.variant}`})}>
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
        return (<React.Fragment key={`variant-${index}`}>
            <div key={`head-${index}-1`} className={`${item.variant}1 heading`}>{capitalizeFirstLetter(item.variant)}</div>
            <div key={`head-${index}-2`} className={`${item.variant}2 heading`}>{capitalizeFirstLetter(item.variant)}</div>
            <div key={`head-${index}-3`} className={`${item.variant}3 heading`}>{capitalizeFirstLetter(item.variant)}</div>
            <div key={`head-${index}-4`} className={`${item.variant}4 heading`}>{capitalizeFirstLetter(item.variant)}</div>
            </React.Fragment>
        )
    })

    const bannerTypeHeads = bannerData.slice(0,4).map((item, index) => {
        return (
            <div key={`type-${index}`} className={`${item.bannerType}-text heading`}>{capitalizeFirstLetter(item.bannerType)}</div>
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