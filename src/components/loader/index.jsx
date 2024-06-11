import { motion } from "framer-motion";
import './styles.scss'

export default function Loader(props) {
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
            opacity: 1
        },
        enter: (i) => ({
            opacity: 0,
            transition: {
                duration: 0.4
            }
        })
    }

    const numColumns = 6
    const loaderText = [ "", "N", "T", "S", "H", "" ]
    
    return (
        <div className="page loader">
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