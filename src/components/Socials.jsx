import { forwardRef } from 'react';
import Magnetic from '../components/magnetic'
import '../assets/Socials.scss';

const Socials = (props, ref) => {
    const links = [
        { text: 'Email', href: 'emailto:contact@igorbelica.com' },
        { text: 'LinkedIn', href: 'https://linkedin.com'},
        { text: 'Instagram', href: 'https://instagram.com' }
    ]

    return (
        <div className='socials text-[5rem] tracking-[0.2rem]'>

            {
                links.map((link, i) => {
                    return (
                        <Magnetic key={i} className="socials__link">
                            <div className="socials__link__content">
                                <a
                                    ref={ (el) => { return ref.current[i] = el } }
                                    className="bounds"
                                    href={link.href}
                                ></a>
                                <span >{link.text}</span>
                            </div>
                        </Magnetic>
                    )
                })
            }

        </div>
    )
}

export default forwardRef(Socials);