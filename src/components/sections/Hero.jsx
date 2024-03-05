import SplitWord from "../SplitWord";
import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const Hero = (props, heroRef) => {
    const [handleMouseMove, mousePosition] = props

    return (
        <motion.div
                ref={heroRef}
                className="hero-section w-screen h-[100dvh] flex flex-col justify-between sticky top-0 p-[$page-padding]"
                onMouseMove={e => handleMouseMove(e)}
                animate={{
                    rotateX: mousePosition.centerX * 20,
                    rotateY: mousePosition.centerY * 20
                }}
            >
                <div className="row max-w-full w-full max-h-[32%] grid grid-flow-col auto-cols-min">
                    <SplitWord str="Nothing" />
                </div>

                <div className="row max-w-full w-3/4 max-h-[32%] grid grid-flow-col auto-cols-min">
                    <SplitWord str="to see" />
                </div>

                <div className="row max-w-full w-2/4 max-h-[32%] grid grid-flow-col auto-cols-min">
                    <SplitWord str="here" glitch={true} />
                </div>
                <motion.div
                    style={{
                        position: 'absolute',
                        width: '30px',
                        height: '30px',
                        background: '#fff'
                    }}
                    animate={{
                        x: mousePosition.x,
                        y: mousePosition.y
                    }}
                />
            </motion.div>
    )
}

export default forwardRef(Hero);