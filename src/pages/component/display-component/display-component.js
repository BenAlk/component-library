import React from 'react'

const ComponentContext = React.createContext()
export {ComponentContext}

export default function Component({component, children}){

    const captialComponent = component.toUpperCase()

return (
    <ComponentContext.Provider value={{component}}>
    <div className={`gallery-${component}`}>
        {children}
        <div className={`gallery-link-button ${component}`}>
            EXPLORE {captialComponent}
        </div>
    </div>
    </ComponentContext.Provider>
)
}