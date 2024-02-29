import { useState, useEffect, useRef } from "react";
import Word from '../components/Word';
import '../assets/Contact.scss';

const Contact = () => {
    const contentRef = useRef(null)
    const [height, setHeight] = useState(0)
    const [top, setTop] = useState(105)
    const animationFrameId = useRef(null)
    const [words, setWords] = useState([
        { text: "", width: 0 },
    ])

    const handleScroll = (event) => {
        if (!animationFrameId.current) {
            animationFrameId.current = requestAnimationFrame(() => {
                const contact = contentRef.current
                const deltaY = event.wheelDeltaY
                const newTop = (top + deltaY) <= contact.offsetHeight ? top + deltaY : top

                contact.animate([{
                    top: `${newTop}lvh`,
                }], {
                    duration: 700,
                    fill: 'forwards',
                    
                })
                setTop(newTop)

                animationFrameId.current = null;
            })
        }
    }

    useEffect(() => {
        window.addEventListener('wheel', handleScroll, {passive: false})

        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                setHeight(entry.target.clientHeight);
            }
        });
    
        if (contentRef.current) {
            resizeObserver.observe(contentRef.current);
        }
    
        return () => {
            window.removeEventListener('wheel', handleScroll)

            if (contentRef.current) {
                resizeObserver.unobserve(contentRef.current);
            }
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [top]);

  return (
    <div ref={contentRef} className="contact-section">
        <div className="spacer"></div>
        <div className="contact group/contact">
            <h1 className="title uppercase text-[6rem] tracking-[0.2rem] text-justify mb-[6.25rem]">
                WE EMBRACE THE <Word words={words} setWords={setWords} funky="not__funky" text="ART" /> OF THE <Word words={words} setWords={setWords} funky="not__funky" text="UNSEEN" />
            </h1>
            <p className="text-[2.5rem] text-justify mb-12">
                We believe that the true <Word words={words} setWords={setWords} funky="not__funky" text="magic" /> of web <Word words={words} setWords={setWords} funky="not__funky" text="design" /> and <Word words={words} setWords={setWords} funky="not__funky" text="development" /> lies beneath the surface. While others may only
                see the final results, we take pride in the <Word words={words} setWords={setWords} funky="not__funky" text="dedication," /> the intricate <Word words={words} setWords={setWords} funky="not__funky" text="process," /> and the creative gymnastics
                that unfold within our team.
            </p>
            <p className="text-[2.5rem] text-justify">
                Our approach revolves around a commitment to understanding and constructing <Word words={words} setWords={setWords} funky="not__funky" text="value" /> by immersing ourselves in
                our customers&#39; <Word words={words} setWords={setWords} funky="not__funky" text="unique" /> needs. For us, <Word words={words} setWords={setWords} funky="not__funky" text="design" /> transcends mere aesthetics; it&#39;s a profound connection
                rooted in <Word words={words} setWords={setWords} funky="not__funky" text="empathy," /> <Word words={words} setWords={setWords} funky="not__funky" text="compassion," /> and an authentic concern for the individuals we serve.
            </p>
        </div>
    </div>
  );
}

export default Contact;
