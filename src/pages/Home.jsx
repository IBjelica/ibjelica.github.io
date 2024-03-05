import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SplitWord from "../components/SplitWord";
import '../assets/Trailer.scss';
import Hero from "../components/sections/Hero";
import Contact from "../components/sections/Contact";

const getRelativeMouseCoordinates = (event, referenceElement) => {
    const position = {
        x: event.pageX,
        y: event.pageY
    }
    const offset = {
        left: 0,
        top: 0,
        width: referenceElement.offsetWidth,
        height: referenceElement.offsetHeight,
    }

    return {
        x: position.x - 65,
        y: position.y - 65,
        width: offset.width,
        height: offset.height,
        centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
        centerY: (position.y - offset.top - offset.height / 2) / (offset.height / 2)
    }
}

const Home = () => {
    const [mousePosition, setMousePosition] = useState({})
    const heroRef = useRef(null)
    const contactRef = useRef(null)
    const [height, setHeight] = useState(0)
    const handleMouseMove = e => {
        setMousePosition(getRelativeMouseCoordinates(e, heroRef.current))
    }

    useEffect(() => {
        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                setHeight(entry.target.clientHeight);
            }
        });

        if (heroRef.current) {
            resizeObserver.observe(heroRef.current);
        }
    
        return () => {
            if (heroRef.current) {
                resizeObserver.unobserve(heroRef.current);
            }
        };
    }, []);

    return (
        <>
            <motion.div
                ref={heroRef}
                className="hero-section w-screen h-[100dvh] flex flex-col justify-between sticky top-0 p-[$page-padding]"
                onMouseMove={e => handleMouseMove(e)}
            >
                <div className="row max-w-full w-full max-h-[32%] grid grid-flow-col auto-cols-min">
                    <SplitWord str="Nothing" />
                </div>

                <div className="row max-w-full w-3/4 max-h-[32%] grid grid-flow-col auto-cols-min">
                    <SplitWord str="to see" />
                </div>

                <div className="row max-w-full w-2/4 max-h-[32%] grid grid-flow-col auto-cols-min">
                    <SplitWord str="here" glitch={true} />
                </div>
                <motion.div
                    className="trailer"
                    animate={{
                        x: mousePosition.x,
                        y: mousePosition.y
                    }}
                    transition={{ type: 'spring'}}
                />
            </motion.div>

            <Contact ref={contactRef} />
            
            {/* <Trailer /> */}
        </>
    )
}

export default Home;