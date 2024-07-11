import React from 'react'
import './Banner.css'

const BannerContext = React.createContext()
export {BannerContext}

export default function Banner({children, variant="multi", bannerType="success",style, textStyle, headStyle}) {

    const bannerClass = `banner ${bannerType} ${variant}`

    return (
        <BannerContext.Provider value={{variant, bannerType, textStyle, headStyle}}>
            <div className={bannerClass} style={style}>
                {children}
            </div>
        </BannerContext.Provider>
    )
}