import { useState, useEffect } from 'react'
import chars from "./letters/chars.jsx"
import parse from "html-react-parser"

const Letter = (props) => {
    let char = props.char

    const letter = () => {
        return (
            chars.filter( l => l.char === char)[0].svg
        )
    }

//Todo: shorten tailwind classNames

    return (
        <div className={"group/letters relative alternating-letter h-full w-auto"}>
            {letter() ? parse( letter() ) : ""}
        </div>
    )
};

export default Letter;