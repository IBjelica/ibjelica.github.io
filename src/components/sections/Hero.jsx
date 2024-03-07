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
            <div className="row max-w-full w-full max-h-[32%] grid grid-flow-col auto-cols-min">
                { splitWord("Nothing") }
            </div>

            <div className="row max-w-full w-3/4 max-h-[32%] grid grid-flow-col auto-cols-min">
                { splitWord("to see") }
            </div>

            <div className="row max-w-full w-2/4 max-h-[32%] grid grid-flow-col auto-cols-min">
                { splitWord("here") }
            </div>
        </div>
    )
}

export default Hero;