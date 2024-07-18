const toastData = [
    {
        variant: "success",
        title: "Success!",
        text: "Example success toast!"
    },
    {
        variant: "info",
        title: "Information!",
        text: "Example information toast!"
    },
    {
        variant: "attention",
        title: "Attention!",
        text: "Example attention toast!"
    },
    {
        variant: "error",
        title: "Error!",
        text: "Example error toast!"
    }
]

const playgroundCode =`
        <Toast>
            <ToastTrigger 
                styleClassName="gallery-link-button"
                title="Success" 
                text="Example Success Toast" 
                variant="success"
                style={{ backgroundColor: "black" }}
            >
                Trigger Code In Here
            </ToastTrigger>
        </Toast>
`

const importCode = `
        import { Toast, ToastTrigger } from "ScrimbaComponents"
    `

const basicCode = (exampleVariant, exampleTitle, exampleText) => {
    return `
        <Toast>
            <ToastTrigger 
                styleClassName={" /* your className here */ "}
                title={"${exampleTitle}"} 
                text={"${exampleText}"} 
                variant={"${exampleVariant}"}
            >
                Trigger Code In Here
            </ToastTrigger>
        </Toast>
`
}

const advancedCode =  `
        <Toast
        titleStyle={{ fontSize: "24px" }}
        textStyle={{ fontSize: "18px" }}
        >
            <ToastTrigger 
                styleClassName="gallery-link-button" 
                title="Success" 
                text="Example Success Toast" 
                variant="success"
                style={{ backgroundColor: "black" }}
            >
                Trigger Code In Here
            </ToastTrigger>
        </Toast>
`

export { toastData, playgroundCode, importCode, basicCode, advancedCode}