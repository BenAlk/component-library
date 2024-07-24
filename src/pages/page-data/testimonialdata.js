const testimonialData = [
    {
        style: "plain",
        person: {
            name: "Enter Name Here",
            title: "Persons job title",
            image: ""
        }
    },
    {
        style: "picture",
        person: {
            name: "Enter Name Here",
            title: "Persons job title",
            image: "https://static.vecteezy.com/system/resources/thumbnails/002/275/847/small_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
        }
    }
]

const importCode = `
        import { Testimonial } from "ScrimbaComponents"
    `

const basicCode = (exampleVariant) => {

    return `
    <Testimonial 
        style="${exampleVariant}"
        person={{
            name: "Enter name here", 
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
            style="picture"
            person={{
                name: "Ben Alkureishi", 
                title: "Front-end Developer", 
                image: "https://static.vecteezy.com/system/resources/thumbnails/002/275/847/small_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
            }}
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed urna nulla vitae laoreet augue.
            Amet feugiat est integer dolor auctor adipiscing nunc urna,
            sit.
        </Testimonial>`

export { testimonialData, importCode, playgroundCode, basicCode }