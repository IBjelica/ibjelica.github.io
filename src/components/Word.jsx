import { useContext } from "react";
import { HoveredContext } from "./contexts/HoveredContext";
import { useTransform, motion, useSpring } from "framer-motion";

const Word = ({children, range, progress}) => {
    const opacity = useTransform(progress, range, [0, 1])
    const springOpacity = useSpring(opacity, {damping: 20, stiffness: 300, mass: 0.5})

    return (
        <span className="word" >
            <span className="shadow">{children}</span>
            <motion.span style={{opacity: springOpacity}} >
                {children}
            </motion.span>
        </span>
    );
};

export default Word;