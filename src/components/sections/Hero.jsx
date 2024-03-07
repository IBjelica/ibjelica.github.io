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
            <div className="row max-w-full w-full max-h-[32%] grid grid-flow-col grid-cols-7">
                { splitWord("Nothing") }
            </div>

            <div className="row max-w-full w-3/4 max-h-[32%] grid grid-flow-col grid-cols-[repeat(6,minmax(_min-content,_1fr))]">
                { splitWord("to see") }
            </div>

            <div className="row max-w-full w-1/2 max-h-[32%] grid grid-flow-col grid-cols-4">
                { splitWord("here") }
            </div>
        </div>
    )
}

export default Hero;