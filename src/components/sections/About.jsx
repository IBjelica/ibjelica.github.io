import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Paragraph from '../Paragraph';
import '../../assets/About.scss';
import Socials from '../Socials';
import { round } from 'lodash';

const paragraph1 = "We believe that the true magic of web design and development lies beneath the surface. While others may only see the final results, we take pride in the dedication, the intricate process, and the creative gymnastics that unfold within our team."
const paragraph2 = "Our approach revolves around a commitment to understanding and constructing value by immersing ourselves in our customers' unique needs. For us, design transcends mere aesthetics; it's a profound connection rooted in empathy, compassion, and an authentic concern for the individual we work with."

const About = (props) => {
    const ref = useRef(null)
    const [ sectionTop, setSectionTop ] = useState(0)
    const { mousePosition, setMousePosition } = props
    const { isHovered, setIsHovered } = props
    const [ isHoveredSocials, setIsHoveredSocials ] = useState(false)
    const size = isHovered ? 300 : isHoveredSocials ? 230 : 130
    const gradient = 'linear-gradient(360deg, hsla(127, 100%, 50%, 0.7) 0%, hsla(226, 100%, 50%, 0.7) 100%)'
    const hoverGradient = 'linear-gradient(360deg, hsla(17, 100%, 50%, 0.6) 0%, hsla(26, 100%, 50%, 0.6) 100%)'
    const bgColor = isHoveredSocials ? hoverGradient : gradient

    const isTouch = window.matchMedia("(pointer: coarse)").matches
    
    const titleRef = useRef(null)
    const title = "we embrace the art of the unseen"
    const splitTitle = title.split(' ').map((word, i) => {
        return {
            text: word,
            width: 0
        }
    })

    const setTitleWidths = () => {
        titleRef.current?.querySelectorAll('span').forEach(element => {
            splitTitle.filter(x => {
                if( x.text == element.textContent ) {
                    x.width = element.getBoundingClientRect().width
                }
            })
        });
    }

    const handleMouseMove = (e) => {
        setMousePosition({x: e.clientX, y: e.clientY})
    }

    const handleScroll = (e) => {
        setSectionTop( ref.current.getBoundingClientRect().top )
    }
    
    useEffect(() => {
        if (!isTouch) {
            ref.current?.addEventListener('mousemove', handleMouseMove)
            return () => { ref.current?.removeEventListener('mousemove', handleMouseMove) }
        }
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
                    WebkitMaskPosition: `${isTouch ? 50 : mousePosition.x - size/2}px ${isTouch ? 150 - sectionTop : mousePosition.y - size/2 - sectionTop }px`,
                }}
                transition={{type: "tween", ease: "backOut"}}
            >
                <h2 ref={titleRef} className="title rabbit">
                    {splitTitle.map((w, i) => {
                        return(
                            <span key={i}>{w.text}</span>
                        )
                    })}
                </h2>
                
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
                <h2
                    className="title"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {setTitleWidths()}

                    {splitTitle.map((word, i) => {
                        const width = Math.round(word.width)

                        return(
                            <span key={i} style={{width: `${width ? width + 'px' : 'auto' }`}}>{word.text}</span>
                        )
                    })}
                </h2>
                
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