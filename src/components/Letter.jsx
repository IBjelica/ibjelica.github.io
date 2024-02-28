import { useState, useEffect } from "react";

const Letter = (props) => {
    const { char, glitch } = props;
    const fonts = [
        'Helvetica Neue',
        'RabbitHole',
        'Times New Roman',
        'system-ui'
    ]
    const [ font, setFont ] = useState('Helvetica Neue');

    const handleClick = () => {
        setFont( prev => {
            const filteredFonts = fonts.filter(f => f !== prev);

            return filteredFonts[Math.floor(Math.random() * filteredFonts.length)];
        } );
    };

    useEffect(() => {
        if (glitch) {
            setInterval(() => {
                handleClick()
            }, 1000);
        }
    }, [])

    return (
        <span style={{ fontFamily: font }} className="group/letter letter uppercase w-[calc(14vw)] h-full flex-grow leading-none text-[min(31vh,_14vw)] text-center cursor-pointer" onClick={handleClick}>
            { char }
        </span>
    )
};

export default Letter;