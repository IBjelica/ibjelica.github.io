import words from "../data/words.jsx"
import parse from "html-react-parser"

const Word = (props) => {
    const { str } = props;

    const svg = words.find((l) => l.str === str)?.svg;

    return (
        // <svg className="word h-full w-auto max-w-full ml-4 mr-4" width="100%" height="100%" viewBox="0 0 150 190" fill="none">
             svg && parse(svg) 
        // </svg>
    )
};

export default Word;