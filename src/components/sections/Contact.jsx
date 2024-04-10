import { useRef, useEffect, useState } from "react";
import { useTransform, motion, useScroll, animate, useSpring } from "framer-motion";
import Paragraph from "../Paragraph";
import '../../assets/Contact.scss';
import '../../assets/Socials.scss';

const paragraph1 = "We believe that the true magic of web design and development lies beneath the surface. While others may only see the final results, we take pride in the dedication, the intricate process, and the creative gymnastics that unfold within our team."
const paragraph2 = "Our approach revolves around a commitment to understanding and constructing value by immersing ourselves in our customers' unique needs. For us, design transcends mere aesthetics; it's a profound connection rooted in empathy, compassion, and an authentic concern for the individual we work with."

const Contact = ({children}) => {
  const targetRef = useRef(null)
  const { scrollY } = useScroll()
  // const windowHeight = window.innerHeight * -1
  // const sectionHeight = targetRef.current?.getBoundingClientRect().height * -1
  // const top = useTransform(scrollY, [700, 800], [0, 0])
  // const top = scrollY
  // console.log(scrollY.get())
  
  const links = [
      { text: 'Email', href: 'emailto:contact@igorbelica.com' },
      { text: 'LinkedIn', href: 'https://linkedin.com'},
      { text: 'Instagram', href: 'https://instagram.com' }
  ]

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
      <motion.div
          className="contact-section mask"
          animate={{
              WebkitMaskSize: `${size}px`,
              WebkitMaskPosition: `${mousePosition.x - size/2}px ${mousePosition.y - size/2}px`,
          }}
          transition={{type: "tween", ease: "backOut"}}
      >
        <h1 className="title">
            we embrace the art of the unseen
        </h1>
        
        <Paragraph text={paragraph1} start="0.85" end="0.70" />

        <Paragraph text={paragraph2} start="0.8" end="0.6" />
        

        <div className='socials'>
            <div className="socials-section mask">
                {
                    links.map((link, i) => {
                        return (
                            <a
                                key={i}
                                className="socials__link"
                                href={link.href}
                            >
                                {link.text}
                            </a>
                        )
                    })
                }
            </div>
        </div>
    </motion.div>
  );
}

export default Contact;
