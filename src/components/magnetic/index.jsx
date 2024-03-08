import { useRef, useState } from "react";
import { motion, spring } from "framer-motion";

const Framer = ({children, className}) => {
    const ref = useRef(null)
    const [position, setPosition] = useState({x:0, y:0})

    const handleMouse = (e) => {
        const { clientX, clientY } = e
        const { width, height, left, top } = ref.current.getBoundingClientRect()
        const middleX = clientX - (left + width / 2)
        const middleY = clientY - (top + height / 2)
        setPosition({ x: middleX * 0.1, y: middleY * 0.1 })
    }

    const reset = () => {
        setPosition({x:0, y:0})
    }

    const { x, y } = position

    return (
        <motion.div
            className={className}
            style={{position: 'relative'}}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{x, y}}
            transition={{type: "spring", stiffness: 1850, damping: 30, mass: 1.8}}
        >
            {children}
        </motion.div>
    )
}

export default Framer;