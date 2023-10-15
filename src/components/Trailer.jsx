import { useRef, useEffect } from 'react';
import Letter from './Letter';

const Trailer = () => {
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
    
        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);

    return (
        <div
            ref={mouseRef}
            className="trailer overflow-clip bg-white bg-opacity-30 pointer-events-none drop-shadow-[0_0_0_rgba(0,0,0,0)] aspect-square rounded-full absolute z-10 opacity-0 w-0 transition-opacity duration-500 ease-[cubic-bezier(0.45, 0.02, 0.09, 0.98)]"
        >

            <div ref={hiddenTextRef} className="group/screen w-screen h-screen p-4 flex flex-col justify-between fixed top-0 left-0 bg-black">

                <div className="row max-w-full h-[25%] flex justify-start align-baseline gap-7">
                    <Letter
                        char="n-alt"
                    />
                    <Letter
                        char="o-alt"
                    />
                    <Letter
                        char="t-alt"
                    />
                    <Letter
                        char="h-alt"
                    />
                    <Letter
                        char="i-alt"
                    />
                    <Letter
                        char="n-alt"
                    />
                    <Letter
                        char="g-alt"
                    />
                </div>

                <div className="row max-w-full h-[25%] flex justify-start align-baseline gap-7">
                    <Letter
                        char="t-alt"
                    />
                    <Letter
                        char="o-alt"
                    />

                    <Letter
                        char=" "
                    />
                    
                    <Letter
                        char="s-alt"
                    />
                    <Letter
                        char="e-alt"
                    />
                    <Letter
                        char="e-alt"
                    />
                </div>

                <div className="row max-w-full h-[25%] flex justify-start align-baseline gap-7">
                    <Letter
                        char="h-alt"
                    />
                    <Letter
                        char="e-alt"
                    />
                    <Letter
                        char="r-alt"
                    />
                    <Letter
                        char="e-alt"
                    />
                </div>
            </div>
        </div>
    )
}

export default Trailer;