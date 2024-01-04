import { useRef, useEffect } from "react";

const Word = (props) => {
    const { words, setWords, funky, text } = props;
    const wordRef = useRef();

    useEffect(() => {
        if (funky === "funky") {
            document.fonts.ready.then(() => {
                const currentWord = wordRef.current;
                const width = currentWord.offsetWidth;

                setWords(prevWords => [
                    ...prevWords,
                    { text, width },
                ]);
            });
        }
    }, []);
    
    useEffect(() => {
        if (funky !== "funky") {
            const currentWord = wordRef.current;
            const word = words.find(word => word.text === text);

            if (word) {
                currentWord.style.width = `${word.width}px`;
            }
        }
    }, [words]);

    return (
        <span ref={wordRef} className={funky}>{text}</span>
    );
};

export default Word;