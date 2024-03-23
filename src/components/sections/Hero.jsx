import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Letter from "../../components/Letter";
import '../../assets/Hero.scss';

const Hero = ({children}) => {

    const [ mousePosition, setMousePosition ] = useState({x: 0, y: 0})
    const [ isHovered, setIsHovered ] = useState(false)
    const size = isHovered ? 300 : 130

    const handleMouseMove = (e) => {
        setMousePosition({x: e.clientX, y: e.clientY})
    }
    
    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    })
    
    const splitWord = (str) => {
        return str.split('').map((char, index) => {
            return(
                <Letter key={index} char={char} isHovered={isHovered} setIsHovered={setIsHovered} />
            )
        })
    }
        

    return (
        <section className="hero-section-wrapper">
            <motion.div
                className="hero-section mask"
                animate={{
                    WebkitMaskSize: `${size}px`,
                    WebkitMaskPosition: `${mousePosition.x - size/2}px ${mousePosition.y - size/2}px`,
                }}
                transition={{type: "tween", ease: "backOut"}}
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
            </motion.div>
            
            <div className="hero-section body">
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

            {children}
        </section>
    )
}

export default Hero;