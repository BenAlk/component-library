import React from 'react'

import './Badge.css'

export default function Badge({children="badge", color="green", variant="square", style}) {
    
    const badgeClass = `badge ${color} ${variant}`
    return (
        <div className={badgeClass} style={style}>
            <span>{children}</span>
        </div>
    )
}


