import { useRef, useEffect } from 'react';
import { lazy } from 'react';

const HiddenHomeContent = lazy(() => import(`./hidden_content/HomePageContent.jsx`))
const HiddenContactContent = lazy(() => import(`./hidden_content/ContactPageContent.jsx`))

const Trailer = (props) => {
    const mouseRef = useRef()
    const hiddenTextRef = useRef()
    let init = false

    useEffect(() => {
        const handleMouseMove = (e) => {
            let posY = e.clientY - mouseRef.current.offsetHeight / 2
            let posX = e.clientX - mouseRef.current.offsetWidth / 2

            hiddenTextRef.current.style.top = (0 - posY) + "px"
            hiddenTextRef.current.style.left = (0 - posX) + "px"

            mouseRef.current.style.top = posY + "px"
            mouseRef.current.style.left = posX + "px"

            if (!init) {
                mouseRef.current.className += " group-hover/screen:w-36 group-hover/screen:opacity-100"
                init = true
            }
        };

        //Todo: Pulse on click?
        //Todo: Click text appear on hover link
        // const handleMouseClick = (e) => {
            
        // }
    
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleMouseMove);
    
        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
            window.removeEventListener(
                'touchmove',
                handleMouseMove
            );
        };
    }, []);

    const renderHiddenContent = () => {
        switch (props.content) {
            case "HomePageContent":
                return <HiddenHomeContent />

            case "ContactPageContent":
                return <HiddenContactContent handleFancyWidths={props.handleFancyWidths} />
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