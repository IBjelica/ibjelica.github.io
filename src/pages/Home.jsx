import { useState } from "react";
import Stairs from "../components/stairs";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";

const Home = () => {
    const [ mousePosition, setMousePosition ] = useState({x: 0, y: 0})
    const [ isHovered, setIsHovered ] = useState(null)
    const [ isLoaded, setIsLoaded ] = useState(null)


    if (document.readyState === "complete") {
        setTimeout(() => {
            setIsLoaded(true)
        }, 3000);
    } else {
        window.addEventListener('load', () => {
            setTimeout(() => {
                setIsLoaded(true)
            }, 3000);
        })
    }

    return (
        <Stairs isLoaded={isLoaded} >
            <Hero
                mousePosition={mousePosition}
                setMousePosition={setMousePosition}
                isHovered={isHovered}
                setIsHovered={setIsHovered}
            />
            <About
                mousePosition={mousePosition}
                setMousePosition={setMousePosition}
                isHovered={isHovered}
                setIsHovered={setIsHovered}
                onload={() => setIsLoaded(true)}
            />
        </Stairs>
    )
}

export default Home;