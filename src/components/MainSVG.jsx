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

    return (
        <svg
            className={'max-w-['+ screenSize.width +'] max-h-['+ screenSize.height +']'}
            viewBox={'0 0 ' + screenSize.width + ' ' + screenSize.height}>
          {/* <g className='max-w-full'> */}
            {/* <AnimatedText
                yy={50}
                fontSize={getCurrentSpacing().elHeight}
                // mainfont={"bla"}
                // hoverfont={"bla"}
                text="Nothing"
            /> */}
            <Letter
                text="N"
                dx={0}
                yy={50}
                fontSize={getCurrentSpacing().elHeight}
            />
            <Letter
                text="o"
                dx={200}
                yy={50}
                fontSize={getCurrentSpacing().elHeight}
            />
            {/* <AnimatedText
                xx={'1%'}
                yy={spacing.elHeight + spacing.gap + 'px'}
                // mainFont={mainBuffer.mainFont}
                // hoverFont={secondaryBuffer.secondaryFont}
                text="to see"
            />
            <AnimatedText
                xx={''}
                yy={( spacing.elHeight * 2 ) + ( spacing.gap * 2 ) + 'px'}
                // mainFont={mainBuffer.mainFont}
                // hoverFont={secondaryBuffer.secondaryFont}
                text="here"
            /> */}
          {/* </g> */}
        </svg>
    )
}

export default MainSVG;