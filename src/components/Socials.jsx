import { useState, useEffect, forwardRef } from 'react';
import { motion } from 'framer-motion';
import '../assets/Socials.scss';

const Socials = (props) => {
    const { isHovered, setIsHovered } = props
    const links = [
        { text: 'Email', href: 'emailto:contact@igorbelica.com' },
        { text: 'LinkedIn', href: 'https://linkedin.com'},
        { text: 'Instagram', href: 'https://instagram.com' }
    ]

    return (
        <div className='socials'>

            <div className="socials-section">
                {
                    links.map((link, i) => {
                        return (
                            <a
                                key={i}
                                className="socials__link"
                                href={link.href}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                {link.text}
                            </a>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Socials;