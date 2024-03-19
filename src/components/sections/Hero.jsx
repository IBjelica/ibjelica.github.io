import Letter from "../../components/Letter";
import '../../assets/Hero.scss';

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
            className="hero-section w-screen flex flex-col justify-between p-[$page-padding]"
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