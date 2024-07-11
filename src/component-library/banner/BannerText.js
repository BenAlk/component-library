import React from 'react'
import {BannerContext} from './Banner'
import './Banner.css'

export default function BannerText({children}) {

    const {variant, textStyle} = React.useContext(BannerContext)

return (variant === "multi" ?(<div className="banner-mess">
    <p className={`mess-${variant}` } style={textStyle}>{children}</p>
    </div>) :
    null
)
}