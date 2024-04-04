import { useRef, useEffect, useState } from "react";
import { useTransform, motion, useScroll, animate } from "framer-motion";
import Paragraph from "../Paragraph";
import '../../assets/Contact.scss';

const paragraph1 = "We believe that the true magic of web design and development lies beneath the surface. While others may only see the final results, we take pride in the dedication, the intricate process, and the creative gymnastics that unfold within our team."
const paragraph2 = "Our approach revolves around a commitment to understanding and constructing value by immersing ourselves in our customers' unique needs. For us, design transcends mere aesthetics; it's a profound connection rooted in empathy, compassion, and an authentic concern for the individual we work with."

const Contact = ({children}) => {
  const containerRef = useRef(null)
  const targetRef = useRef(null)

  return (
    <div ref={targetRef} className="contact-section">
        <h1 className="title">
            we EMBRACE the ART of the UNSEEN
        </h1>
        
        <Paragraph text={paragraph1} start="0.8" end="0.6" />

        <Paragraph text={paragraph2} start="0.75" end="0.55" />
        
        {children}
    </div>
  );
}

export default Contact;
