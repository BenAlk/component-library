import React from 'react'

export default function useRandomStyle(type) {

    const colors = React.useMemo(() =>{
        if (type === "badge") {
            return ["gray", "red", "yellow","green", "blue", "indigo", "purple", "pink"]
        } else if (type === "banner") {
            return ["red", "green", "blue", "yellow"]
        } else {
            return []
        }
    }, [type])
    const styles = React.useMemo(() => type === "badge" ? ["square", "pill"] : ["single" , "multi"], [type])

    const [color, setColor] = React.useState("green")
    const [style, setStyle] = React.useState("square")
    const [bannerType, setBannerType] = React.useState("success")

    const matchBannerType = (color) => {
        color === "green" ? setBannerType("success") :
        color === "red" ? setBannerType("error") : 
        color === "yellow" ? setBannerType("attention") : 
        color === "blue" ? setBannerType("update") : setBannerType("")
    }

    const getRandomStyle = React.useCallback(() => { 
        const newColor = colors[Math.floor(Math.random() * colors.length)]
        const newStyle = styles[Math.floor(Math.random() * styles.length)]
        setColor(newColor)
        setStyle(newStyle)
        matchBannerType(newColor)
    }, [colors, styles])

    const setInitialStyle = React.useCallback(() => {
        const initialColor = colors[Math.floor(Math.random() * colors.length)]
        const initialStyle = styles[Math.floor(Math.random() * styles.length)]
        setColor(initialColor)
        setStyle(initialStyle)
        matchBannerType(initialColor)
    }, [colors, styles])

    return (type === "badge" ? {color, style, getRandomStyle, setInitialStyle} : type === "banner" ? {style, bannerType, getRandomStyle, setInitialStyle} : null)
}