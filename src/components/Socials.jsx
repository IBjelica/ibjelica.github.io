import { forwardRef } from 'react';
import Magnetic from '../components/magnetic'
import '../assets/Socials.scss';

const Socials = (props, ref) => {
    return (
        <div className='socials text-[5rem] tracking-[0.2rem]'>

            <Magnetic className="socials__link">
                <div className="content">
                    <div className="bounds"></div>
                    <a href="">Email</a>
                </div>
            </Magnetic>

            <Magnetic className="socials__link">
                <div className="socials__link__content">
                    <div ref={ref} className="bounds"></div>
                    <a href="#">LinkedIn</a>
                </div>
            </Magnetic>

            <Magnetic className="socials__link">
                <div className="content">
                    <div className="bounds"></div>
                    <a href="">Instagram</a>
                </div>
            </Magnetic>

        </div>
    )
}

export default forwardRef(Socials);