const tooltipData = [
    {
        key: "1",
        color: "gray",
        variant: "bold"
    },
    {
        key: "2",
        color: "blue",
        variant: "bold"
    },
    {
        key: "3",
        color: "purple",
        variant: "bold"
    },
    {
        key: "4",
        color: "green",
        variant: "bold"
    },
    {
        key: "5",
        color: "gray",
        variant: "light"
    },
    {
        key: "6",
        color: "blue",
        variant: "light"
    },
    {
        key: "7",
        color: "purple",
        variant: "light  "
    },
    {
        key: "8",
        color: "green",
        variant: "light"
    },
]

const playgroundCode = `
        <Tooltip color="blue" variant="bold">
            <Tooltip.Trigger styleClassName="custom-trigger-style">
                Hover me to see the tooltip.
            </Tooltip.Trigger>
            <Tooltip.Popup>
                <Tooltip.Title>
                    How to use!
                </Tooltip.Title>
                <Tooltip.Text>
                    Wrap whatever you want to be the trigger for the tool tip in the Tooltip.Trigger component.
                </Tooltip.Text>
            </Tooltip.Popup>
        </Tooltip>
`

const importCode = `
        import {Tooltip} from "ScrimbaComponents"
`

const basicCode = (exampleColor, exampleVariant) => {
    return `
        <Tooltip color="blue" variant="bold">
                            <Tooltip.Trigger styleClassName="custom-trigger-style">
                                Hover me to see the tooltip.
                            </Tooltip.Trigger>
                            <Tooltip.Popup>
                                <Tooltip.Title>
                                    How to use!
                                </Tooltip.Title>
                                <Tooltip.Text>
                                    Wrap whatever you want to be the trigger for the tool tip in the Tooltip.Trigger component.
                                </Tooltip.Text>
                            </Tooltip.Popup>
                        </Tooltip>
    `
}

const advancedCode = `
        <Tooltip color="blue" variant="bold">
                        <Tooltip.Trigger styleClassName="custom-trigger-style">
                            Hover me to see the tooltip.
                        </Tooltip.Trigger>
                        <Tooltip.Popup>
                            <Tooltip.Title>
                                How to use!
                            </Tooltip.Title>
                            <Tooltip.Text>
                                Wrap whatever you want to be the trigger for the tool tip in the Tooltip.Trigger component.
                            </Tooltip.Text>
                        </Tooltip.Popup>
                    </Tooltip>
`

export { tooltipData, playgroundCode, importCode, basicCode, advancedCode }