import React from 'react'

const ComponentContext = React.createContext()
export  { ComponentContext }
export default function ComponentPage({ children, level, scope, componentCode }) {
    return (
        <ComponentContext.Provider value={{level, scope, componentCode}}>
            <div className={`${level}-code`}>
                {children}
            </div>
        </ComponentContext.Provider>
    )
}