import React from 'react'
import {BannerContext} from './Banner'
import './Banner.css'
// Import images statically
import successImage from './images/success.svg'
import errorImage from './images/error.svg'
import attentionImage from './images/attention.svg'
import neutralImage from './images/neutral.svg'

// Image Map
const imageMap = {
    success: successImage,
    error: errorImage,
    attention: attentionImage,
    info: neutralImage
}


export default function BannerHead({children}) {
    
    const {bannerType, headStyle} = React.useContext(BannerContext)
    const imageSrc = imageMap[bannerType];

    return (
        <>
            <img className="banner-img" src={imageSrc} alt={`${bannerType} icon`} />
            <div className="banner-head-container">
            <h1 className="banner-head" style={headStyle}>{children}</h1>
            </div>
        </>
    )
}