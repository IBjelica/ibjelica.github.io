import { useRef, useState, useEffect } from 'react';
import '../assets/Trailer.scss';

const Trailer = (props) => {

    return (
        <div
            ref={mouseRef}
            className="trailer"
            style={{
                // transform: translate
            }}
        ></div>
    )
}

export default Trailer;