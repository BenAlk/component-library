const bannerData =  [
    {
        key: "ms",
        variant: "multi",
        bannerType: "success",
        head: "Success",
        text: "Example multi line success banner."
    },
    {
        key: "mn",
        variant: "multi",
        bannerType: "neutral",
        head: "Info",
        text: "Example multi line information banner"
    },
    {
        key: "ma",
        variant: "multi",
        bannerType: "attention",
        head: "Attention",
        text: "Example multi line attention banner"
    },
    {
        key: "me",
        variant: "multi",
        bannerType: "error",
        head: "Error",
        text: "Example multi line error banner"
    },
    {
        key: "ss",
        variant: "single",
        bannerType: "success",
        head: "Success",
        text: "Example single line success banner."
    },
    {
        key: "sn",
        variant: "single",
        bannerType: "neutral",
        head: "Info",
        text: "Example single line information banner"
    },
    {
        key: "sa",
        variant: "single",
        bannerType: "attention",
        head: "Attention",
        text: "Example single line attention banner"
    },
    {
        key: "se",
        variant: "single",
        bannerType: "error",
        head: "Error",
        text: "Example single line error banner"
    }
]

const playgroundCode = `
        <Banner 
            variant="multi" 
            bannerType="neutral" 
            style={{backgroundColor: "black"}} 
            headStyle={{color: "red"}} 
            textStyle={{color: "purple"}}
        >
            <Banner.Head>
                Head Text Goes Here
            </Banner.Head>
            <Banner.Text>
                Message Text Goes Here
            </Banner.Text>
        </Banner>
`

const importCode = `
        import { Banner } from "ScrimbaComponents"
    `

const basicCode = (exampleVariant, exampleBannerType) => {
    return `
        <Banner 
            variant="${exampleVariant}" 
            bannerType={"${exampleBannerType}"}
        >
            <Banner.Head>
                Head Text Goes Here
            </Banner.Head>
            <Banner.Text>
                Message Text Goes Here
            </Banner.Text>
        </Banner>
    `
}

const advancedCode = `
        <Banner variant="multi" 
                bannerType="neutral" 
                style={{color: "black"}} 
                headStyle={{color: "red"}} 
                textStyle={{color: "purple"}}
            >
            <Banner.Head>
                Head Text Goes Here
            </Banner.Head>
            <Banner.Text>
                Message Text Goes Here
            </Banner.Text>
        </Banner>
`
const customBannerStyle={width: "400px"}

export { bannerData, customBannerStyle, importCode, basicCode, advancedCode, playgroundCode } 