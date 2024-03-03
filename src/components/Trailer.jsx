import { useRef, useState, useEffect } from 'react';
import '../assets/Trailer.scss';

const Trailer = (props) => {
    const [ clientX, setClientX ] = useState(0)
    const [ clientY, setClientY ] = useState(0)
    const [ init, setInit ] = useState(false)
    const mouseRef = useRef(null)
    const animationFrameId = useRef(null)
    
    const handleMouseMove = (event) => {
        if (!animationFrameId.current) {
            animationFrameId.current = requestAnimationFrame(() => {
                const { clientX, clientY } = event.touches ? event.touches[0] : event;
                const posX = clientX - (mouseRef.current ? mouseRef.current.clientWidth / 2 : 0)
                const posY = clientY - (mouseRef.current ? mouseRef.current.clientHeight / 2 : 0)

                setClientX(clientX);
                setClientY(clientY);
    console.log('x: ' + posX)
    console.log('y: ' + posY)
                if (mouseRef.current) {
                    mouseRef.current.animate([{
                        top: `${posY}px`,
                        left: `${posX}px`,
                    }], {
                        duration: 700,
                        fill: 'forwards',
                    })
                }

                if (!init) {
                    mouseRef.current.style = `top: ${posY}px; left: ${posX}px;`;
                    mouseRef.current.className += ` group-hover/screen:w-1 group-hover/screen:opacity-100`;
                    setInit(true)
                }
    
                animationFrameId.current = null;
            });
        }
    };

    useEffect(() => {
        //Todo: Pulse on click?
        //Todo: "Click" text appear on hover link
        const handleMouseClick = (e) => {
            
        }
    
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleMouseMove);
    
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchmove", handleMouseMove);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    });

    return (
        <div ref={mouseRef} className="trailer"></div>
    )
}

export default Trailer;