import { motion } from "framer-motion";
import './styles.scss'
import { delay, initial } from "lodash";

export default function Stairs(props) {
    const { isLoaded } = props;

    const anim = (variants, custom) => {
        return {
            initial: "initial",
            animate: isLoaded ? "enter" : "",
            exit: "exit",
            variants,
            custom
        }
    }

    const expand = {
        initial: {
            top: 0
        },
        enter: (i) => ({
            top: "100%",
            transition: {
                duration: 0.4,
                delay: 0.05 * i
            }
        })
    }

    const numColumns = 6
    const loaderText = [ "", "N", "T", "S", "H", "" ]
    
    return (
        <div className="page stairs">
            <div className="transition-container">
                {
                    [...Array(numColumns)].map((_, i) => {
                        return (
                            <motion.div {...anim(expand, numColumns - i)} className="stair" key={i}>
                                {loaderText[i]}
                            </motion.div>
                        )
                    })
                }
            </div>
            {props.children}
        </div>
    )
}