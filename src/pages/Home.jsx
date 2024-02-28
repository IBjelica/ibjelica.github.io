import { useState, useEffect, useRef } from "react";
import SplitWord from "../components/SplitWord";
import DotsLink from "../components/DotsLink";
import Trailer from "../components/Trailer";

const Home = () => {
    const contentRef = useRef(null)
    const [height, setHeight] = useState(0)
    
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
        <div ref={contentRef} className="content group/screen w-screen h-[100dvh] p-4 flex flex-col justify-between">
            
            <div className="row max-w-full w-full flex justify-start align-baseline">
                <SplitWord str="Nothing" />
            </div>

            <div className="row max-w-full w-3/4 flex justify-start align-baseline">
                <SplitWord str="to&nbsp;see" />
            </div>

            <div className="row max-w-full w-2/4 flex justify-start align-baseline">
                <SplitWord str="here" glitch={true} />
            </div>
            
            <DotsLink link="/contact" />
            <Trailer />
        </div>
    )
}

export default Home;