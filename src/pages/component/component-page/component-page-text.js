import React from 'react'
import { ComponentContext } from './component-page'

export default function ComponentPageText ({ children }) {

    const { level } = React.useContext(ComponentContext)
    const capitalizedLevel = level.charAt(0).toUpperCase() + level.slice(1)

    return (
        <div className={`${level}-code-text`}>
            <h2>{capitalizedLevel} {level === "import" ? "" : "Use"}</h2>
            <p>{children}</p>
        </div>
    )
}