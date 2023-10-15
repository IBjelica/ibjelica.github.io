import chars from "../data/chars.jsx"
import parse from "html-react-parser"

const Letter = (props) => {
    const { char } = props;

    const svg = chars.find((l) => l.char === char)?.svg;

//Todo: shorten tailwind classNames

    return (
        <svg className="letter h-full w-auto max-w-full ml-4 mr-4" width="100%" height="100%" viewBox="0 0 150 190" fill="none">
            { svg && parse(svg) }
        </svg>
    )
};

export default Letter;