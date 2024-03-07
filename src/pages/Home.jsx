import { useState } from "react";
import Hero from "../components/sections/Hero";
import Contact from "../components/sections/Contact";
import Trailer from "../components/Trailer";
import HoveredContextProvider from "../components/contexts/HoveredContext";

const Home = () => {

    return (
        <HoveredContextProvider>
            <Hero />

            <Contact />
            
            <Trailer />
        </HoveredContextProvider>
    )
}

export default Home;