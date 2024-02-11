//components/About.js
import Image from "next/image"

const About = () => {
    return(
        <>
        <div className="aboutSection w-full h-3/4 flex justify-evenly content-evenly">
            <div>
                <Image src='/image/rick_reyes_bw.jpg' className="rickImg py-1 m-20 rounded-full" width={400} height={400} alt="Rick Reyes image" />
            </div>
            <div className="">
                <Image src='/image/about.png' className="aboutLogo rounded-full" width={300} height={100}alt="About Me" />
                <p className="aboutMe flex ">
                Hi there, I'm Ricardo Reyes, I am a full stack software engineer. Please take a look around, and see what I have been up to, let's see what we can build together.
                Solving problems and providing elegant, innovative and accessible solutions is a passion of mine. I am always thinking about code this passion often leads me to solving my coding problems, while gaming, playing music, family time or grilling. I'll figure out the answer and rush to my computer. I'm passionate about coding, passionate about new technologies, and passionate about software engineering who will do what ever it takes to find an answer.
                I made my personal portfolio using Next.js, Tailwind, CSS, & Javascript.
                </p>
            </div>
        </div>
        </>
    )
}

export default About;