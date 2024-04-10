import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Paragraph from '../Paragraph';
import '../../assets/About.scss';
import Socials from '../Socials';

const paragraph1 = "We believe that the true magic of web design and development lies beneath the surface. While others may only see the final results, we take pride in the dedication, the intricate process, and the creative gymnastics that unfold within our team."
const paragraph2 = "Our approach revolves around a commitment to understanding and constructing value by immersing ourselves in our customers' unique needs. For us, design transcends mere aesthetics; it's a profound connection rooted in empathy, compassion, and an authentic concern for the individual we work with."

const About = () => {
    const ref = useRef(null)
    const [ sectionTop, setSectionTop ] = useState(0)
    const [ mousePosition, setMousePosition ] = useState({x: 0, y: 0})
    const [ isHovered, setIsHovered ] = useState(false)
    const size = isHovered ? 230 : 130

    const handleMouseMove = (e) => {
        setMousePosition({x: e.clientX, y: e.clientY})
    }
    
    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    })

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setSectionTop( ref.current.getBoundingClientRect().top )
        })
    }, [])

    return (
        <div
            ref={ref}
            className="about-section"
        >
            <motion.div
                className="about mask"
                animate={{
                    WebkitMaskSize: `${size}px`,
                    WebkitMaskPosition: `${mousePosition.x - size/2}px ${mousePosition.y - size/2 - sectionTop}px`,
                }}
                transition={{type: "tween", ease: "backOut"}}
            >
                <h1 className="title">
                    we embrace the art of the unseen
                </h1>
                
                <Paragraph text={paragraph1} start="0.85" end="0.70" />

                <Paragraph text={paragraph2} start="0.8" end="0.65" />

                <Socials isHovered={isHovered} setIsHovered={setIsHovered} />
            </motion.div>
            
            <div className="about body">
                <h1 className="title">
                    we embrace the art of the unseen
                </h1>
                
                <Paragraph text={paragraph1} start="0.85" end="0.70" />

                <Paragraph text={paragraph2} start="0.8" end="0.65" />

                <Socials isHovered={isHovered} setIsHovered={setIsHovered} />
            </div>
        </div>
    )
}

export default About;

// TODO: width of socials words
// TODO: snap scroll bug on chrome