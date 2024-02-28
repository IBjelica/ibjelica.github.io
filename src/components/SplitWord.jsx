import Letter from "./Letter";

const SplitWord = (props) => {
    const { str, glitch } = props;
    const chars = str.split('');

    return (
        <>
            { chars.map((char, index) => {
                return(
                    <Letter key={index} char={char} glitch={glitch} />
                )
            })}
        </>
    )
};

export default SplitWord;