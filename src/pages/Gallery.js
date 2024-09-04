import React from 'react'
import { Badge, Banner, Card, Testimonial, Toast, ToastTrigger, Tooltip } from '../component-library/ScrimbaComponents'
import Component from "./component/display-component/display-component-index"
import "./css/gallery.css"
import clickTest from "./assets/click-test.png"
export default function Gallery() {
return (
        <div className="gallery-container">
            <h1>Welcome to our UI Component Showcase page.<br /> Here, you'll find examples of some essential UI components that enhance user experience and interface design.<br /> Each component serves a unique purpose and helps in creating a more interactive and user-friendly application.<br /> The examples provided represent a selection of preset styles; however, custom styles can be applied to meet specific requirements.</h1>

            {/* BADGES CARD */}            
            <Component component="badges">
                <Component.Head>
                    <Component.Title />
                    <Component.Intro>
                        Badges are small count or status indicators used to highlight the number of items, such as notifications, messages, or updates.
                    </Component.Intro>
                </Component.Head>
                <Component.Card>
                    <Badge color={"red"} variant={"square"}>Example</Badge>
                    <Badge color={"green"} variant={"square"}>Example</Badge>
                    <Badge color={"blue"} variant={"square"}>Example</Badge>
                    <Badge color={"gray"} variant={"pill"}>Example</Badge>
                    <Badge color={"indigo"} variant={"pill"}>Example</Badge>
                    <Badge color={"yellow"} variant={"pill"}>Example</Badge>
                </Component.Card>
            </Component>

            {/* BANNERS CARD */}
            <Component component="banners">
                <Component.Head>
                    <Component.Title />
                    <Component.Intro>
                        Banners are used to display prominent messages to users, such as alerts, notifications, promotions, or important announcements.
                    </Component.Intro>
                </Component.Head>
                <Component.Card>
                    <Banner variant="single" bannerType="success">
                        <Banner.Head>
                            Congratulations
                        </Banner.Head>
                        <Banner.Text>
                            Example 1 of the banner component.
                        </Banner.Text>
                    </Banner>
                    <Banner variant="multi" bannerType="info">
                        <Banner.Head>
                            Information Available!
                        </Banner.Head>
                        <Banner.Text>
                            Click the link below to find out more about styles and how to integrate it to your site.
                        </Banner.Text>
                    </Banner>
                </Component.Card>
            </Component>
            
            {/* CARDS CARD */}
            <Component component="cards">
                <Component.Head>
                    <Component.Title />
                    <Component.Intro>
                        Cards are versatile containers used to group related information and actions, making it easy to organize content into digestible sections.
                    </Component.Intro>
                </Component.Head>
                <Component.Card>
                    <Card 
                        title={"Easy Deployment"} 
                        cardLogo={"./images/logo.png"} 
                        logoDescription={"Brand logo, an arrow pointing up into a cloud."}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
                    </Card>
                </Component.Card>
            </Component>
            
            {/* TESTIMONIALS CARD */}
            <Component component="testimonials">
                <Component.Head>
                    <Component.Title />
                    <Component.Intro>
                        Testimonials display user feedback or reviews, building trust and credibility by showcasing positive experiences from other users.
                    </Component.Intro>
                </Component.Head>
                <Component.Card>
                    <Testimonial 
                        // eslint-disable-next-line react/style-prop-object
                        style="picture"
                        person={{
                            name: "Ben Alkureishi", 
                            title: "Front-end Developer", 
                            image: "https://static.vecteezy.com/system/resources/thumbnails/002/275/847/small_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed urna nulla vitae laoreet augue.
                        Amet feugiat est integer dolor auctor adipiscing nunc urna,
                        sit.
                    </Testimonial>
                </Component.Card>
            </Component>
            
            {/* TOASTS CARD */}
            <Component component="toasts">
                <Component.Head>
                    <Component.Title />
                    <Component.Intro>
                        Toasts are brief, auto-dismissable notifications that appear temporarily on the screen, usually in response to a user action.
                    </Component.Intro>
                </Component.Head>
                <Component.Card>
                    <Toast>
                        <ToastTrigger 
                            styleClassName="click-test-button" 
                            title="Success" text="Example Success Toast" 
                            variant="success"
                        >
                            Click to test!
                            <img src={clickTest} alt="Click to test toast" />
                        </ToastTrigger>
                    </Toast>
                </Component.Card>
            </Component>
            
            {/* TOOLTIP CARD */}
            <Component component="tooltips">
                <Component.Head>
                    <Component.Title />
                    <Component.Intro>
                        Tooltips provide additional information about a particular element when a user hovers over or focuses on that element.
                    </Component.Intro>
                </Component.Head>
                <Component.Card>
                    <Tooltip color="blue" variant="bold">
                        <Tooltip.Trigger styleClassName="click-test-button">
                            Hover to test!
                            <img src={clickTest} alt="Hover to test tooltip" />
                        </Tooltip.Trigger>
                        <Tooltip.Popup>
                            <Tooltip.Title>
                                Tooltip!
                            </Tooltip.Title>
                            <Tooltip.Text>
                                Click the button below to explore the tooltips.
                            </Tooltip.Text>
                        </Tooltip.Popup>
                    </Tooltip>
                </Component.Card>
            </Component>

            <div className="outro">
                Thank you for exploring our component gallery, showcasing a selection of our versatile UI components.<br /> While we've highlighted some of our favorites here, there's much more to discover! For a deeper dive into each component, including comprehensive usage examples and customization options, visit our specific component pages.<br />
                <br/>
                Each page provides detailed documentation and usage guidelines to help you integrate these components seamlessly into your projects.
                Start exploring and transforming your user interfaces with our powerful React component library today!
            </div>
        </div>
)
}