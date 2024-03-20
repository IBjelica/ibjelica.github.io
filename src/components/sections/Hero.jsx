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
            className="hero-section"
        >
            <div className="row first">
                { splitWord("Nothing") }
            </div>

            <div className="row second">
                { splitWord("to see") }
            </div>

            <div className="row third">
                { splitWord("here") }
            </div>
        </div>
    )
}

export default Hero;