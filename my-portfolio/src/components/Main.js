//components/Main.js
import Image from "next/image"

const Main = () => {
    return (
        <>
        <main className="w-full h-3/4 flex justify-evenly">
                <div>
                    <Image src='/image/rick_reyes_logo.png' className="portfolioLogo" width={300} height={300} alt="Rick Reyes logo" />

                    <button className="btn text-white bg-black rounded-full px-2 py-1 m-3" type="button">Let's Chat</button>
                    <p className="text-black m-3">Let me help you with your next project.</p>
                </div>
                <div>
                    <Image src='/image/rick_reyes.png' className="portfolioImg rounded-full my-6" width={300} height={300} alt="Rick Reyes Image" />
                </div>
        </main>
        </>
    )
}

export default Main;