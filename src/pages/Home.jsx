import { useState, useEffect, useRef } from "react";
import SplitWord from "../components/SplitWord";
import DotsLink from "../components/DotsLink";
import Trailer from "../components/Trailer";
import Contact from "./Contact";

const Home = () => {
    const contentRef = useRef(null)
    const [height, setHeight] = useState(0)

    const contactIn = () => {

    }
    
    useEffect(() => {
        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                setHeight(entry.target.clientHeight);
            }
        });
    
        if (contentRef.current) {
            resizeObserver.observe(contentRef.current);
        }
    
        return () => {
            if (contentRef.current) {
                resizeObserver.unobserve(contentRef.current);
            }
        };
    }, []);

    return (
        <>
            <div ref={contentRef} className="content group/screen w-screen h-[100dvh] flex flex-col justify-between">
                
                <div className="row max-w-full w-full max-h-[32%] grid grid-flow-col auto-cols-min">
                    <SplitWord str="Nothing" />
                </div>

                <div className="row max-w-full w-3/4 max-h-[32%] grid grid-flow-col auto-cols-min">
                    <SplitWord str="to see" />
                </div>

                <div className="row max-w-full w-2/4 max-h-[32%] grid grid-flow-col auto-cols-min">
                    <SplitWord str="here" glitch={true} />
                </div>
                
                {/* <DotsLink contactIn={contactIn} /> */}
                <Trailer />

            </div>
            <Contact className="contact-section" />
        </>
    )
}

export default Home;