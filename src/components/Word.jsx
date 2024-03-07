import { useContext } from "react";
import { HoveredContext } from "./contexts/HoveredContext";

const Word = (props) => {
    const { hovered, setHovered } = useContext(HoveredContext)

    const { text } = props

    return (
        <span onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} >{text}</span>
    );
};

export default Word;