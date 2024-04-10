import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
                <div className="row first" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    Nothing to
                </div>

                <div className="row second" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    see here
                </div>
            </motion.div>
            
            <div className="hero-section body">
                <div className="row first" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    Nothing to
                </div>

                <div className="row second" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    see here
                </div>
            </div>

            {children}
        </section>
    )
}

export default Hero;