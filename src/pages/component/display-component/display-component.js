import React from 'react'
import { Link } from "react-router-dom"
import { capitalizeFirstLetter } from '../../../utils/utils'

const ComponentContext = React.createContext()


export {ComponentContext}

export default function Component({component, children}){

    const captialComponent = component.toUpperCase()
    const linkComponent = capitalizeFirstLetter(component)

    // Passing the component as a prop to the Link component for navigation
return (
    <ComponentContext.Provider value={{component}}>
    <div className={`gallery-${component}`}>
        {children}
        <Link
            to={`/${linkComponent}`}
        >
            <div className={`gallery-link-button ${component}`}>
                EXPLORE {captialComponent}
            </div>
        </Link>
    </div>
    </ComponentContext.Provider>
)
}