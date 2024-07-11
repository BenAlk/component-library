import './App.css';
import React from 'react'
import Badge from "./component-library/badge/Badge.js"
import Banner from "./component-library/banner/Banner.js"
import Card from "./component-library/card/Card.js"
import Testimonial from "./component-library/testimonials/Testimonial.js"
import Tooltip from "./component-library/tooltip/TTindex.js"

import useRandomStyle from "./hooks/useRandomStyle.js"
import ToastProvider from './component-library/toast/ToastProvider.js';
import ToastTrigger from './component-library/toast/ToastTrigger.js';

function App() {


  const badgeRandomStyle = useRandomStyle('badge')
  const bannerRandomStyle = useRandomStyle('banner')

    const { setInitialStyle: setBadgeInitialStyle } = badgeRandomStyle
    const { setInitialStyle: setBannerInitialStyle } = bannerRandomStyle

    React.useEffect(() => {
        setBadgeInitialStyle()
        setBannerInitialStyle()
    }, [setBadgeInitialStyle, setBannerInitialStyle])

  return (
    <div className="App">
      <Badge getRandomStyle={badgeRandomStyle.getRandomStyle} color={badgeRandomStyle.color} style={badgeRandomStyle.style}>
        {badgeRandomStyle.color ? badgeRandomStyle.color.charAt(0).toUpperCase() + badgeRandomStyle.color.slice(1) : null}
      </Badge>
      <Banner getRandomStyle={bannerRandomStyle.getRandomStyle} bannerType={bannerRandomStyle.bannerType} type={bannerRandomStyle.style}>{bannerRandomStyle.bannerType}</Banner> 
      <Card title={"Easy Deployment"} cardLogo={"./images/logo.png"} logoDescription={"Brand logo, an arrow pointing up into a cloud."}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Card>
      <Testimonial type="plain" person={{ name: "Ben Alkureishi", title: "Front-end Developer", image: "/images/ben.jpg"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.</Testimonial>
    <Tooltip color="blue" variant="bold">
        <Tooltip.Trigger customcss={{color: "black", fontSize: "2rem"}}>Testing 123</Tooltip.Trigger>
        <Tooltip.Popup>
            <Tooltip.Title>Archive notes</Tooltip.Title>
            <Tooltip.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip.Text>
        </Tooltip.Popup>
    </Tooltip>
    <ToastProvider>
        <ToastTrigger title="Success" text="Your work has been saved" type="success">Test the success toast</ToastTrigger>
        <ToastTrigger title="Information" text="Please read updated information" type="info">Test the info toast</ToastTrigger>
        <ToastTrigger title="Warning" text="A network error was detected" type="warning">Test the warning toast</ToastTrigger>
        <ToastTrigger title="Error" text="Please re-save your work again" type="error">Test the error toast</ToastTrigger>
    </ToastProvider>

    </div>
  );
}

export default App;
