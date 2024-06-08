import { useState } from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";

const Home = () => {
    const [ mousePosition, setMousePosition ] = useState({x: 0, y: 0})
    const [ isHovered, setIsHovered ] = useState(null)

    return (
        <>
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
            />
        </>
    )
}

export default Home;

// TODO: Skoce reci na hero sekciji kad se prvi put posle loada pomeri mis
// TODO: inicijalna pozicija maski na load