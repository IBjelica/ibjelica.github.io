import Letter from "../../components/Letter";

const Hero = () => {

    const splitWord = (str) => {
        return str.split('').map((char, index) => {
            return(
                <Letter key={index} char={char} />
            )
        })
    }
    
    return (
        <div
            className="hero-section w-screen h-[100dvh] flex flex-col justify-between sticky top-0 p-[$page-padding]"
        >
            <div className="row max-w-[90%] w-[90%] max-h-[32%] grid grid-flow-col grid-cols-7">
                { splitWord("Nothing") }
            </div>

            <div className="row max-w-[90%] w-[65%] max-h-[32%] grid grid-flow-col grid-cols-6">
                { splitWord("to see") }
            </div>

            <div className="row max-w-[90%] w-[45%] max-h-[32%] grid grid-flow-col grid-cols-4">
                { splitWord("here") }
            </div>
        </div>
    )
}

export default Hero;