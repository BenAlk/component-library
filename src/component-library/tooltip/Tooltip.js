import React from 'react'
import "./Tooltip.css"

const TooltipContext = React.createContext()
export {TooltipContext}

export default function Tooltip({color, variant, children}) {

    return (
        <TooltipContext.Provider value={{color, variant}}>
            <div className="tooltip-container">
                {children}           
            </div>
        </TooltipContext.Provider>
    )
}
