import { useEffect, useContext } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { HoveredContext } from './contexts/HoveredContext';
import '../assets/Trailer.scss';

export default function Trailer() {
    const { hovered, setHovered } = useContext(HoveredContext)
    const trailerSize = 130
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    const smoothOptions = { damping: 20, stiffness: 200, mass: 0.2 }
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions)
    }

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e
        mouse.x.set(clientX - trailerSize / 2)
        mouse.y.set(clientY - trailerSize / 2)
    }

    useEffect( () => {
        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    } )

    return (
        <motion.div
            className="trailer"
            style={{
                left: smoothMouse.x,
                top: smoothMouse.y,
            }}
        ></motion.div>
    )
}