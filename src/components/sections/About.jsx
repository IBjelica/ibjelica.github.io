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
    const [ isHoveredSocials, setIsHoveredSocials ] = useState(false)
    const size = isHovered ? 230 : isHoveredSocials ? 230 : 130
    const gradient = 'linear-gradient(360deg, hsla(127, 100%, 50%, 0.7) 0%, hsla(226, 100%, 50%, 0.7) 100%)'
    const hoverGradient = 'linear-gradient(360deg, hsla(17, 100%, 50%, 0.6) 0%, hsla(26, 100%, 50%, 0.6) 100%)'
    const bgColor = isHoveredSocials ? hoverGradient : gradient

    const handleMouseMove = (e) => {
        setMousePosition({x: e.clientX, y: e.clientY})
    }

    const handleScroll = () => {
        setSectionTop( ref.current.getBoundingClientRect().top )
    }
    
    useEffect(() => {
        window.addEventListener('mousemove drag', handleMouseMove)
        return () => { window.removeEventListener('mousemove drag', handleMouseMove) }
    })

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => { window.addEventListener('scroll', handleScroll) }
    })

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
                <h1 className="title rabbit">
                    we embrace the art of the unseen
                </h1>
                
                <div className="paragraphs">
                    <Paragraph text={paragraph1} />

                    <Paragraph text={paragraph2} />
                </div>

                <Socials />

                <motion.div
                    className="gradient"
                    animate={{
                        background: bgColor
                    }}
                ></motion.div>
            </motion.div>
            
            <div className="about body">
                <h1
                    className="title"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    we embrace the art of the unseen
                </h1>
                
                <div className="paragraphs">
                    <Paragraph text={paragraph1} start="0.9" end="0.45" />

                    <Paragraph text={paragraph2} start="0.8" end="0.62" />
                </div>

                <Socials setIsHovered={setIsHoveredSocials} />
            </div>
        </div>
    )
}

export default About;