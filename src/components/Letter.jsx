import { useContext } from "react";
import { HoveredContext } from "./contexts/HoveredContext";

const Letter = (props) => {
    const { isHovered, setIsHovered } = props

    const { char } = props;
    const classes = char !== ' ' ?
    "letter uppercase text-[min(31vh,_14vw)] text-center min-w-[210px]"
    : "text-[min(31vh,_14vw)] min-w-[100px]"

    return (
        <div className="letter-wrapper overflow-hidden h-full flex justify-center items-center flex-grow cursor-pointer">
            <span onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={classes}>
                { char }
            </span>
        </div>
    )
};

export default Letter;