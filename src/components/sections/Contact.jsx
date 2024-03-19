import { useRef, useEffect, useState } from "react";
import { useTransform, motion } from "framer-motion";
import Word from "../../components/Word";
import '../../assets/Contact.scss';

const Contact = (props) => {
  const ref = useRef(null)
  const [ scrollY, setScrollY ] = useState(0)
  const [ width, setWidth ] = useState(70)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(Math.round(window.scrollY));
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => { window.removeEventListener('scroll', handleScroll) }
  }, [])

  useEffect(() => {
    const { top } = ref.current.getBoundingClientRect()
    
    const widthPercentage = (scrollY / Math.round(top)) * 30 + 70;
    setWidth( Math.min(Math.max(widthPercentage, 70), 100) )
  }, [scrollY])

  return (
    <motion.div
    ref={ref}
      className="contact-section"
      style={{ width: `${width}%` }}
    >
        <h1 className="title uppercase text-[6rem] tracking-[0.2rem] text-justify mb-[6.25rem]">
            WE <Word text="EMBRACE" /> THE <Word text="ART" /> OF THE <Word text="UNSEEN" />
        </h1>
        <p className="text-[2.5rem] text-justify mb-12">
            We believe that the true magic" of web design" and development" lies beneath the surface. While others may only
            see the final results, we take pride in the dedication", the intricate process", and the creative gymnastics
            that unfold within our team.
        </p>
        <p className="text-[2.5rem] text-justify mb-12">
            Our approach revolves around a commitment to understanding and constructing value" by immersing ourselves in
            our customers&#39; unique" needs. For us, design" transcends mere aesthetics; it&#39;s a profound connection
            rooted in empathy", compassion", and an authentic concern for the individual we work with.
        </p>
    </motion.div>
  );
}

export default Contact;
