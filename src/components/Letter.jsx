import chars from "../data/chars.jsx"
import parse from "html-react-parser"

const Letter = (props) => {
    const { char } = props;

//Todo: shorten tailwind classNames

    return (
        <h1 className="letter h-full flex-grow leading-none text-[min(31vh,_14vw)] text-center">
            { char }
        </h1>
    )
};

export default Letter;