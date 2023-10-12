import { useState, useEffect } from 'react'
import AnimatedText from './AnimatedText'
import Letter from './Letter'


function MainSVG() {
    const [screenSize, setScreenSize] = useState(getCurrentDimensions())
    const [spacing, setSpacing]       = useState(getCurrentSpacing())

    function getCurrentDimensions(){
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }
    
    function getCurrentSpacing(){
    let height30  = Math.round( screenSize.height * 0.3 ),
        width22   = Math.round( screenSize.width * 0.226 ),
        elHeight  = Math.min(width22, height30),
        gap   = ( screenSize.height - ( elHeight * 3 ) ) / 2;
    
        return {
            elHeight: elHeight,
            gap: gap
        }
    }
    
    useEffect(() => {
        const updateDimensions = () => {
            setScreenSize(getCurrentDimensions())
            setSpacing(getCurrentSpacing())
        }
        window.addEventListener('resize', updateDimensions);
    
        return(() => {
            window.removeEventListener('resize', updateDimensions);
        })
    }, [screenSize, spacing])

    let y = 150
    let space = getCurrentSpacing()
    let dy = y + space.elHeight + space.gap

    return (
        <svg
            // className={'max-w-['+ screenSize.width +'] max-h-['+ screenSize.height +']'}
            width={"100%"}
            height={"100%"}
            viewBox={'0 0 ' + screenSize.width + ' ' + screenSize.height}>
            
            <text x={0} y={0} className="word">
                <Letter
                    text="N"
                    // dx={0}
                    // yy={y}
                    fontSize={y}
                />
                {/* <Letter
                    text="O"
                    // dx={180}
                    // yy={y}
                    fontSize={y}
                /> */}
                {/* <Letter
                    text="T"
                    dx={360}
                    yy={y}
                    fontSize={y}
                />
                <Letter
                    text="H"
                    dx={540}
                    yy={y}
                    fontSize={y}
                />
                <Letter
                    text="I"
                    dx={720}
                    yy={y}
                    fontSize={y}
                />
                <Letter
                    text="N"
                    dx={800}
                    yy={y}
                    fontSize={y}
                />
                <Letter
                    text="G"
                    dx={980}
                    yy={y}
                    fontSize={y}
                /> */}
            </text>
            
            {/* <text className="word">
                <Letter
                    text="T"
                    dx={0}
                    // yy={dy}
                    fontSize={y}
                />
                <Letter
                    text="O"
                    dx={180}
                    // yy={dy}
                    fontSize={y}
                />
                <Letter
                    text=" "
                    dx={360}
                    // yy={dy}
                    fontSize={y}
                />
                <Letter
                    text="S"
                    dx={540}
                    // yy={dy}
                    fontSize={y}
                />
                <Letter
                    text="E"
                    dx={720}
                    // yy={dy}
                    fontSize={y}
                />
                <Letter
                    text="E"
                    dx={800}
                    // yy={dy}
                    fontSize={y}
                />
            </text>

            
            <text className="word">
                <Letter
                    text="H"
                    dx={0}
                    // yy={dy}
                    fontSize={y}
                />
                <Letter
                    text="E"
                    dx={180}
                    // yy={dy}
                    fontSize={y}
                />
                <Letter
                    text="R"
                    dx={360}
                    // yy={dy}
                    fontSize={y}
                />
                <Letter
                    text="E"
                    dx={540}
                    // yy={dy}
                    fontSize={y}
                />
            </text> */}
        </svg>
    )
}

export default MainSVG;