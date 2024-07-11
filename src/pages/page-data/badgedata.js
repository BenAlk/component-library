const badgeData =  [
    {
        key: "1",
        color: "gray",
        style: "square"
    },
    {
        key: "2",
        color: "red",
        style: "square"
    },
    {
        key: "3",
        color: "yellow",
        style: "square"
    },
    {
        key: "4",
        color: "green",
        style: "square"
    },
    {
        key: "5",
        color: "blue",
        style: "square"
    },
    {
        key: "6",
        color: "indigo",
        style: "square"
    },
    {
        key: "7",
        color: "purple",
        style: "square"
    },
    {
        key: "8",
        color: "pink",
        style: "square"
    },
    {
        key: "9",
        color: "gray",
        style: "pill"
    },
    {
        key: "10",
        color: "red",
        style: "pill"
    },
    {
        key: "11",
        color: "yellow",
        style: "pill"
    },
    {
        key: "12",
        color: "green",
        style: "pill"
    },
    {
        key: "13",
        color: "blue",
        style: "pill"
    },
    {
        key: "14",
        color: "indigo",
        style: "pill"
    },
    {
        key: "15",
        color: "purple",
        style: "pill"
    },
    {
        key: "16",
        color: "pink",
        style: "pill"
    },
]

const playgroundCode = `
        <Badge
                color={"green"}
                variant={"square"}
                style={{
                padding: "10px 20px",
                fontSize: "0.8rem",
            }}
        >
                Your Chosen Text
        </Badge>
        `

const importCode = `
        import {Badge} from "ScrimbaComponents"
    `
    
    const basicCode = (exampleColor, exampleType) => {

    return `
        <Badge
            color={"${exampleColor}"}
            variant={"${exampleType}"}
        >
            Your Chosen Text
        </Badge>
    `


} 
const advancedCode = `
        <Badge
            style={{
                fontSize: "1rem",
                padding: "4px 8px",
                backgroundColor: "green"
            }}
        >
            Your Chosen Text
        </Badge>
            `


/* Styling for example Badges */
const customBadgeStyle = {height: "30px", width: "100%", textAlign: "center", fontSize: "0.8rem"}

export { badgeData, playgroundCode, importCode, basicCode, advancedCode, customBadgeStyle }