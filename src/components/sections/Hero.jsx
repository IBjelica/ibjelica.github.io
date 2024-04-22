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
                    <span>Nothing</span>
                    <span>to</span>
                </div>

                <div className="row second" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <span>see</span>
                    <span>here</span>
                </div>
            </motion.div>
            
            <div className="hero-section body">
                <h1 className="row first" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <span>Nothing</span>
                    <span>to</span>
                </h1>

                <h1 className="row second" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <span>see</span>
                    <span>here</span>
                </h1>
            </div>

            {children}
        </section>
    )
}

export default Hero;