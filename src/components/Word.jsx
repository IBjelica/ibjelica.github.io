import words from "../data/words.jsx"
import Letter from "../components/Letter";
import parse from "html-react-parser"

const Word = (props) => {
    const { str, fancy } = props;
    const chars = str.split('');

    return (
        <span className={`landing-text ${fancy ? 'fancy' : ''} flex h-full w-full uppercase`}>
            { chars.map((char, index) => {
                return(
                    <Letter key={index} char={char} />
                )
            })}
        </span>
    )
};

export default Word;