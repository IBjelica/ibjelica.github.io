import { useRef, useState } from "react";
import Hero from "../components/sections/Hero";
import Contact from "../components/sections/Contact";
import Trailer from "../components/Trailer";
import HoveredContextProvider from "../components/contexts/HoveredContext";

const Home = () => {

    const stickyElement = useRef(null)

    return (
        <HoveredContextProvider>
            <Hero />

            <Contact ref={stickyElement} />
            
            <Trailer stickyElement={stickyElement} />
        </HoveredContextProvider>
    )
}

export default Home;