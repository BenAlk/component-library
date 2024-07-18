import React from 'react'
import { Card } from '../component-library/ScrimbaComponents'
import { playgroundCode, importCode } from "./page-data/carddata.js"
import ComponentPage from './component/component-page/component-page-index'
import "./css/cards.css"
export default function Cards () {
    return (
        <div className="example-card-container">
            <div className="example-intro">
                <h1>Welcome to the card section, below is an example of the card component.</h1>
            </div>

            <div className="example-container">
                <Card 
                    title={"Easy Deployment"} 
                    cardLogo={"./images/logo.png"} 
                    logoDescription={"Brand logo, an arrow pointing up into a cloud."}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
                </Card>
            </div>
            <ComponentPage level={"import"} scope={{Card}} componentCode={importCode}>
                <ComponentPage.Text>
                    To use this component please use the following code to import the Card component.
                </ComponentPage.Text>
                <ComponentPage.Playground />
            </ComponentPage>
            
            <ComponentPage level={"basic"} scope={{Card}} componentCode={playgroundCode}>
                <ComponentPage.Text>
                    The card component only has one current style. You can specify your own logo as well as a logo description for accessibility using the <span className="prop-name">cardLogo</span> and <span className="prop-name">logoDescription</span> props. <br /> <br />You can also use the <span className="prop-name">title</span> prop to customize the title of the card, and use the children to define the content shown on the cards main body.
                </ComponentPage.Text>
                <ComponentPage.Playground />
            </ComponentPage>

            <ComponentPage level={"playground"} scope={{Card}} componentCode={playgroundCode}>
                    <ComponentPage.Text>
                        Try out your own code in the editor below and see the output.
                    </ComponentPage.Text>
                    <ComponentPage.Playground />
                </ComponentPage>
        </div>
    )
}