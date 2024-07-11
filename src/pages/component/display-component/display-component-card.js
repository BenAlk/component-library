import React from 'react'
import { ComponentContext } from './display-component'

export default function ComponentCard({children}){

    const {component} = React.useContext(ComponentContext)

    return (
        <div className={`gallery-${component}-show-examples`}>
            {children}
        </div>
    )
}