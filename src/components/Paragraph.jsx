import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import Word from "./Word";
import '../assets/Paragraph.scss';

const Paragraph = ({text, start, end}) => {
    const element = useRef(null)
    const { scrollYProgress } = useScroll({
        target: element,
        offset: [`start ${start}`, `start ${end}`]
    })

    const words = text.split(" ");

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
}

export default Paragraph;