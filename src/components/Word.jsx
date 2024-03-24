import { useContext } from "react";
import { HoveredContext } from "./contexts/HoveredContext";
import { useTransform, motion } from "framer-motion";

const Word = ({children, range, progress}) => {
    const opacity = useTransform(progress, range, [0, 1])

    return (
        <span className="word" >
            <span className="shadow">{children}</span>
            <motion.span style={{opacity}} >
                {children}
            </motion.span>
        </span>
    );
};

export default Word;