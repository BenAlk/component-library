import React from 'react'
import {ComponentContext} from "./display-component"


export default function ComponentHead({children}) {

    const {component} = React.useContext(ComponentContext)

    return(
        <div className={`gallery-${component}-text`}>
            {children}
        </div>
    )
}