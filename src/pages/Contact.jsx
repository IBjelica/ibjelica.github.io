import { useState, useEffect, useRef } from "react";
import Word from '../components/Word';
import DotsLink from "../components/DotsLink";
import Trailer from "../components/Trailer/Trailer";

const Contact = () => {
    const contentRef = useRef(null)
    const [height, setHeight] = useState(0)
    const [words, setWords] = useState([
        { text: "", width: 0 },
    ])

    useEffect(() => {
        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                setHeight(entry.target.clientHeight);
            }
        });
    
        if (contentRef.current) {
            resizeObserver.observe(contentRef.current);
        }
    
        return () => {
            if (contentRef.current) {
                resizeObserver.unobserve(contentRef.current);
            }
        };
    }, []);

  return (
    <div ref={contentRef} className="group/screen relative min-h-screen px-[2.1875rem] py-8">
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
        
        <DotsLink link="/" />
        <Trailer
            height={height}
            words={words}
            setWords={setWords}
            hiddenContent={
                <div className="row max-w-full h-full px-[1.1875rem] py-4">
                    <h1 className="title uppercase text-[6rem] tracking-[0.2rem] text-justify mb-[6.25rem]">
                        WE EMBRACE THE <Word words={words} setWords={setWords} funky="funky" text="ART" /> OF THE <Word words={words} setWords={setWords} funky="funky" text="UNSEEN" />
                    </h1>
                    <p className="text-[2.5rem] text-justify mb-12">
                        We believe that the true <Word words={words} setWords={setWords} funky="funky" text="magic" /> of web <Word words={words} setWords={setWords} funky="funky" text="design" /> and <Word words={words} setWords={setWords} funky="funky" text="development" /> lies beneath the surface. While others may only
                        see the final results, we take pride in the <Word words={words} setWords={setWords} funky="funky" text="dedication," /> the intricate <Word words={words} setWords={setWords} funky="funky" text="process," /> and the creative gymnastics
                        that unfold within our team.
                    </p>
                    <p className="text-[2.5rem] text-justify">
                        Our approach revolves around a commitment to understanding and constructing <Word words={words} setWords={setWords} funky="funky" text="value" /> by immersing ourselves in
                        our customers&#39; <Word words={words} setWords={setWords} funky="funky" text="unique" /> needs. For us, <Word words={words} setWords={setWords} funky="funky" text="design" /> transcends mere aesthetics; it&#39;s a profound connection
                        rooted in <Word words={words} setWords={setWords} funky="funky" text="empathy," /> <Word words={words} setWords={setWords} funky="funky" text="compassion," /> and an authentic concern for the individuals we serve.
                    </p>
                </div>
            }
        />
    </div>
  );
}

export default Contact;
