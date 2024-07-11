import React from 'react'
import { ComponentContext } from './display-component'

export default function ComponentTitle() {
    
    const {component} = React.useContext(ComponentContext)
    
    const capitalizedComponent = component.charAt(0).toUpperCase() + component.slice(1)

    return <h2>{capitalizedComponent}</h2>
}