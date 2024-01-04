import { useRef, useState, useEffect } from 'react';
import { lazy } from 'react';

const HiddenHomeContent = lazy(() => import(`./hidden_content/HomePageContent.jsx`))
const HiddenContactContent = lazy(() => import(`./hidden_content/ContactPageContent.jsx`))

const Trailer = (props) => {
    const { height, words, setWords } = props
    const [ scrollYPos, setScrollYPos ] = useState(0)
    const [ clientX, setClientX ] = useState(0)
    const [ clientY, setClientY ] = useState(0)
    const mouseRef = useRef(null)
    const hiddenTextRef = useRef(null)
    const animationFrameId = useRef(null)
    let init = false

    const handleScroll = () => {
        if (!animationFrameId.current) {
            animationFrameId.current = requestAnimationFrame(() => {
                setScrollYPos(document.body.scrollTop || window.scrollY || document.documentElement.scrollT || 0)
                document.body.querySelector(".trailer > div").scrollTop = scrollYPos

                animationFrameId.current = null
            });
        }
    };
    
    const handleMouseMove = (event) => {
        if (!animationFrameId.current) {
            animationFrameId.current = requestAnimationFrame(() => {
                const { clientX, clientY } = event.touches ? event.touches[0] : event;
                const posX = clientX - (mouseRef.current ? mouseRef.current.clientWidth / 2 : 0)
                const posY = clientY + scrollYPos - (mouseRef.current ? mouseRef.current.clientHeight / 2 : 0)

                setClientX(clientX);
                setClientY(clientY);
    
                if (mouseRef.current && hiddenTextRef.current) {
                    mouseRef.current.animate([{
                        top: `${posY}px`,
                        left: `${posX}px`,
                    }], {
                        duration: 700,
                        fill: 'forwards',
                    })
            
                    hiddenTextRef.current.animate([{
                        top: `${0 - posY}px`,
                        left: `${0 - posX}px`,
                    }], {
                        duration: 700,
                        fill: 'forwards',
                    })
                }
    
                if (!init) {
                    mouseRef.current.style = `top: ${posY}px; left: ${posX}px;`;
                    hiddenTextRef.current.style = `height: ${height}px; top: ${0 - posY}px; left: ${0 - posX}px;`;
                    mouseRef.current.className += ` group-hover/screen:w-40 group-hover/screen:opacity-100`;
                    init = true;
                }
    
                animationFrameId.current = null;
            });
        }
    };

    useEffect(() => {
        //Todo: Pulse on click?
        //Todo: Click text appear on hover link
        // const handleMouseClick = (e) => {
            
        // }
        
        if (hiddenTextRef.current) {
            hiddenTextRef.current.style.height = `${height}px`;
        }
    
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('touchmove', handleMouseMove);
        document.body.addEventListener('scroll', handleScroll);
    
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("touchmove", handleMouseMove);
            document.body.removeEventListener("scroll", handleScroll);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [scrollYPos, height]);

    const renderHiddenContent = () => {
        switch (props.content) {
            case "HomePageContent":
                return <HiddenHomeContent />

            case "ContactPageContent":
                return <HiddenContactContent words={words} setWords={setWords} />
        }
    }

    return (
        <div
            ref={mouseRef}
            className="trailer overflow-clip bg-white bg-opacity-30 pointer-events-none drop-shadow-[0_0_15px_rgba(0,0,0,1)] aspect-square rounded-full absolute z-10 opacity-0 w-0 transition-opacity duration-500 ease-[cubic-bezier(0.45, 0.02, 0.09, 0.98)]"
        >
            <div ref={hiddenTextRef} className="group/screen w-screen h-screen p-4 flex flex-col justify-between fixed top-0 left-0 bg-black">
                {
                    renderHiddenContent()
                }
            </div>
        </div>
    )
}

export default Trailer;