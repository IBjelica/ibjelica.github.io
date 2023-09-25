import { useState, useEffect } from 'react'
import opentype from 'opentype.js'
import parse from 'html-react-parser'

const Letter = (props) => {
    const [path, setPath] = useState([])
    // const [positionX, setPositionX] = useState(() => 0)
    let char = props.text
    let fs = props.fontSize
    let output = ''
    // let dx = positionX
    let y = parseInt( props.yy )
    let fontFile = "/src/fonts/HelveticaNeueCyr-Light.woff"

    // const mainBuffer = fetch('/src/fonts/HelveticaNeueCyr-Light.woff').then(res => res.arrayBuffer());
    // const secondaryBuffer = fetch('/src/fonts/SaintRegular.ttf').then(res => res.arrayBuffer());

    useEffect(() => {
        opentype.load(fontFile, function (err, font) {
            if (!err) {
                let p = font.getPaths(char, props.dx, y, fs)
                // dx += font.getAdvanceWidth(char, fs)
console.log("brojac")
                p.forEach(function(path){
                    path.fill = "white"
                    output += path.toSVG('2')
                })

                setPath(output)
                // setPositionX(dx)
            } else {
                console.log("Font could not be loaded: " + err);
            }
        });
    }, [path])


    return (
        ( typeof path === 'string' ) ? parse(path) : ""
    )
}
export default Letter;