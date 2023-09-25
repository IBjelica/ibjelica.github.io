import { v4 as uuidv4 } from "uuid";
import Letter from "./Letter";

const AnimatedText = (props) => {
    let dx = 0

    return (
        // <text
        //     className="uppercase text-white fill-white transition-all duration-700"
        //     textAnchor="start"
        //     dominantBaseline="text-before-edge"
        //     fontSize="MIN(30vh, 22.6vw)"
        //     x={props.xx}
        //     y={props.yy}>
        //     {
                props.text.split("").map((letter, id = uuidv4()) => {
                    return (
                        (letter === " ") ?
                        " " :
                        <Letter
                            key={id}
                            text={letter}
                            dx={dx}
                            yy={props.yy}
                            fontSize={props.fontSize}
                        />
                    )
                })
        //     }
        // </text>
    )
}

export default AnimatedText;