import { useRef } from "react";
import Hero from "../components/sections/Hero";
import Contact from "../components/sections/Contact";
import Socials from "../components/Socials";
import Overlay from "../components/Overlay";
import Trailer from "../components/Trailer";
import HoveredContextProvider from "../components/contexts/HoveredContext";

const Home = () => {
    const stickyElements = useRef([])
    const circleElement = useRef(null)

    return (
        <HoveredContextProvider>
            <Hero />

            <Contact circleElement={circleElement} >
                <Socials ref={stickyElements} />
            </Contact>

            <Trailer stickyElements={stickyElements} />
            {/* <Overlay ref={circleElement} /> */}
        </HoveredContextProvider>
    )
}

export default Home;