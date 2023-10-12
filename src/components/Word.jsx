import { v4 as uuidv4 } from "uuid";
import Letter from "./Letter";

const Word = (props) => {
    return (
        props.text.split("").map((letter, id = uuidv4()) => {
            return (
                (letter === " ") ?
                " " :
                <Letter
                    key={id}
                    char={letter}
                    height={props.height}
                />
            )
        })
    )
}

export default Word;