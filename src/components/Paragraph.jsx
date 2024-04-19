import { useRef } from "react";
import { useScroll } from "framer-motion";
import Word from "./Word";
import '../assets/Paragraph.scss';

const Paragraph = ({text, start, end}) => {
    const element = useRef(null)
    const words = text.split(" ");

    if (start && end) {
        const { scrollYProgress } = useScroll({
            target: element,
            offset: [`start ${start}`, `start ${end}`]
        })
    
        return (
            <p
                ref={element}
                className="paragraph"
            >
                {
                    words.map( (word, i) => {
                        const start = i / words.length
                        const end = start + (1 / words.length)
                        return <Word key={i} range={[start, end]} progress={scrollYProgress}>{word}</Word>
                    })
                }
            </p>
        )
    } else {
    
        return (
            <p
                ref={element}
                className="paragraph"
            >
                {
                    words.map( (word, i) => {
                        return <Word key={i} >{word}</Word>
                    })
                }
            </p>
        )
    }
}

export default Paragraph;