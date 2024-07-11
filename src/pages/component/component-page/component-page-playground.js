import React from 'react'
import { ComponentContext } from './component-page'
import CodePlayground from './codeplayground/codeplayground'

export default function ComponentPagePlayground () {

    const { level, scope, componentCode} = React.useContext(ComponentContext)

    return (
        <div className={`${level}-code-visual`}>
            <CodePlayground scope={scope} componentCode={componentCode} readOnly={level === "playground" ? false : true} level={level} />
        </div>
    )
}