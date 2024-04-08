import { useRef, useEffect, useState } from "react";
import { useTransform, motion, useScroll, animate, useSpring } from "framer-motion";
import Paragraph from "../Paragraph";
import '../../assets/Contact.scss';

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
  

  return (
    <motion.div
      ref={targetRef}
      className="contact-section"
      style={{y: top}}
      transition={{type: "inertia", stiffness: 10}}
    >
        <h1 className="title">
            we EMBRACE the ART of the UNSEEN
        </h1>
        
        <Paragraph text={paragraph1} start="0.85" end="0.70" />

        <Paragraph text={paragraph2} start="0.8" end="0.6" />
        
        {children}
    </motion.div>
  );
}

export default Contact;
