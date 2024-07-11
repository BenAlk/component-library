import React from 'react'
import "./Tooltip.css"

export default function TooltipText ({children}) {
    return (
        <div className="tooltip-text accent">
            {children}
        </div>

    )
}