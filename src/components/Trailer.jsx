import { useEffect, useContext, useState, useRef } from 'react';
import { animate, motion, transform, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import { HoveredContext } from './contexts/HoveredContext';
import '../assets/Trailer.scss';

// TODO: trailer appears doubled when the page is scrolled enough and it is hovering over nothing to see here letters

const Trailer = (props) => {
    const stickyElements = props.stickyElements
    const [ isHovered, setIsHovered ] = useState(false)
    
    const trailerRef = useRef()
    const trailerSize = 130

    const { scrollYProgress } = useScroll()
    const trailerOpacity = useTransform(scrollYProgress, [0, .4, .5], [0, 0, .8])

    const mouse = {
        x: useMotionValue(window.innerWidth / 2 - trailerSize / 2),
        y: useMotionValue(window.innerHeight / 2 - trailerSize / 2)
    }

    const smoothOptions = { damping: 20, stiffness: 200, mass: 0.2 }
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions)
    }

    const scale = {
        x: useMotionValue(1),
        y: useMotionValue(1)
    }

    const rotate = (distance) => {
        const angle = Math.atan2(distance.y, distance.x)
        animate(trailerRef.current, {rotate: `${angle}rad`}, {duration: 0})
    }

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e
        
        if (isHovered) {
            const { left, top, width, height } = e.target.getBoundingClientRect()
    
            const center = { x: left + width / 2, y: top + height / 2 }
            const distance = { x: clientX - center.x , y: clientY - center.y }
            
            rotate(distance)
            const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y))
            const newScaleX = transform(absDistance, [0, width / 2], [1, 1.4])
            const newScaleY = transform(absDistance, [0, height / 2], [1, 0.6])

            scale.x.set(newScaleX)
            scale.y.set(newScaleY)
            mouse.x.set((center.x - trailerSize / 2) + distance.x * 0.1)
            mouse.y.set((center.y - trailerSize / 2) + distance.y * 0.1)

        } else {
            mouse.x.set(clientX - trailerSize / 2)
            mouse.y.set(clientY - trailerSize / 2)
        }
    }

    const handleMouseOver = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
        animate(trailerRef.current, {scaleX: 1, scaleY: 1}, {duration: 0.1}, {type: "spring"})
    }

    useEffect( () => {
        stickyElements.current.map((element) => {
            element.addEventListener('mouseover', handleMouseOver)
            element.addEventListener('mouseleave', handleMouseLeave)
        })

        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            stickyElements.current.map((element, i) => {
                element.removeEventListener('mouseover', handleMouseOver)
                element.removeEventListener('mouseleave', handleMouseLeave)
            })
        }
    } )

    const template = ({rotate, scaleX, scaleY}) => {
        return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`
    }
    return (
        <motion.div
            transformTemplate={template}
            className="trailer"
            ref={trailerRef}
            style={{
                opacity: trailerOpacity,
                left: smoothMouse.x,
                top: smoothMouse.y,
                scaleX: scale.x,
                scaleY: scale.y
            }}
            animate={{
                width: trailerSize,
                height: trailerSize
            }}
        ></motion.div>
    )
}

export default Trailer;