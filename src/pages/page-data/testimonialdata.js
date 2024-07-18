const testimonialData = [
    {
        style: "plain",
        person: {
            name: "Enter Name Here",
            title: "Persons job title",
            image: "Logo"
        }
    },
    {
        style: "picture",
        person: {
            name: "Enter Name Here",
            title: "Persons job title",
            image: "https://st.depositphotos.com/11742109/51383/v/450/depositphotos_513837330-stock-illustration-gender-neutral-profile-avatar-side.jpg"
        }
    }
]

const importCode = `
        import { Testimonial } from "ScrimbaComponents"
    `

const basicCode = (exampleVariant) => {

    return `
    <Testimonial 
        variant={"${exampleVariant}"}
        person={{name: "Enter name here", 
            title: "Job title", 
            image: "hyperlink to image"
        }}
    >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed urna nulla vitae laoreet augue.
        Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
    </Testimonial>`


} 

const playgroundCode = `
        <Testimonial 
            variant="picture" 
            person={{name: "Ben Alkureishi", 
                title: "Front-end Developer", 
                image: "/images/ben.jpg"
            }}
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed urna nulla vitae laoreet augue.
            Amet feugiat est integer dolor auctor adipiscing nunc urna,
            sit.
        </Testimonial>`

export { testimonialData, importCode, playgroundCode, basicCode }