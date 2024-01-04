import Letter from "./Letter";

const Word = (props) => {
    const { str, funky } = props;
    const chars = str.split('');

    return (
        <span className={`landing-text ${funky ? 'funky' : ''} flex h-full w-full uppercase`}>
            { chars.map((char, index) => {
                return(
                    <Letter key={index} char={char} />
                )
            })}
        </span>
    )
};

export default Word;