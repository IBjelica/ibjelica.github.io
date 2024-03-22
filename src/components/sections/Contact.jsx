import { useRef, useEffect, useState } from "react";
import { useTransform, motion, useScroll, animate } from "framer-motion";
import Word from "../../components/Word";
import '../../assets/Contact.scss';

const Contact = ({children}) => {
  const containerRef = useRef(null)
  const targetRef = useRef(null)

  return (
    <div ref={containerRef} className="stretcher">
      <div ref={targetRef} className="contact-section">
        <h1 className="title">
          we <Word text="EMBRACE" /> the <Word text="ART" /> of the <Word text="UNSEEN" />
        </h1>
        <p>
          We believe that the true magic" of web design" and development" lies beneath the surface. While others may only
          see the final results, we take pride in the dedication", the intricate process", and the creative gymnastics
          that unfold within our team.
        </p>
        <p>
          Our approach revolves around a commitment to understanding and constructing value" by immersing ourselves in
          our customers&#39; unique" needs. For us, design" transcends mere aesthetics; it&#39;s a profound connection
          rooted in empathy", compassion", and an authentic concern for the individual we work with.
        </p>

        {children}
      </div>
    </div>
  );
}

export default Contact;
