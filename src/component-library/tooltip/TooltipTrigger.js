import React from 'react'
import "./Tooltip.css"

export default function TooltipTrigger ({styleClassName, customcss, children}) {

    const hasCustomCss = customcss ? {customcss} : null
    const hasClassName = styleClassName ? styleClassName : ""
    return (
        <p className={`tooltip-trigger ${hasClassName}`} style={hasCustomCss}>{children}</p> 
    )
}