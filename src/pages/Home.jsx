import { useRef } from "react";
import Hero from "../components/sections/Hero";
import Contact from "../components/sections/Contact";
import Socials from "../components/Socials";
import Trailer from "../components/Trailer";
import HoveredContextProvider from "../components/contexts/HoveredContext";

const Home = () => {
    const stickyElements = useRef([])

    return (
        <HoveredContextProvider>
            <Hero />

            <Contact />

            <Socials ref={stickyElements} />
            
            <Trailer stickyElements={stickyElements} />
        </HoveredContextProvider>
    )
}

export default Home;