import { useState, useEffect, useRef } from "react";
import Letter from "../components/Letter";
import SplitWord from "../components/SplitWord";
import DotsLink from "../components/DotsLink";
import Trailer from "../components/Trailer/Trailer";

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
        <div ref={contentRef} className="group/screen w-screen h-[100dvh] p-4 flex flex-col justify-between">
    {/* Todo: height for smaller screens */}
            
            <div className="row max-w-full w-full flex justify-start align-baseline">
                <SplitWord str="Nothing" />
            </div>

            <div className="row max-w-full w-3/4 flex justify-start align-baseline">
                <SplitWord str="to&nbsp;see" />
            </div>

            <div className="row max-w-full w-2/4 flex justify-start align-baseline">
                <SplitWord str="here" />
            </div>
            
            <DotsLink link="/contact" />

            <Trailer
                height={height}
                content="HomePageContent"
            />
        </div>
    )
}

export default Home;