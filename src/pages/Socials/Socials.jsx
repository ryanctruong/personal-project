import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SOCIALMEDIA } from '../../utils/SocialMediaData.jsx';
import useStore from '../../utils/VariableStore.jsx';
import './styles/socials.css';
import './styles/socials-list.css';

const Socials = () => {
    const [hoveredImage, setHoveredImage] = useState(null);

    const {
        colors,
        displayType,
    } = useStore((state) => ({
        colors: state.colors,
        displayType: state.displayType,
    }));

    const pokeTheme_ONE = colors.baseColor;
    const pokeTheme_TWO = colors.complementaryColor;

    const socialMediaVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5 + i * 0.2,
                duration: 0.5,
            },
        }),
    };

    const handleImageClick = (href) => {
        if (href) {
            window.open(href, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div className={`socials-main-box`}>
            <div className='socials-list'>
                {SOCIALMEDIA.map((item, index) => (
                    <motion.div
                        className={`social-media ${displayType ? 'light' : 'dark'}`}
                        style={{ boxShadow: `0 0 0.5em ${pokeTheme_ONE}` }}
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={socialMediaVariants}
                    >
                        <div className='pic-container-flex-end'>
                            <div className='sm-pic-container'>
                                <img
                                    src={hoveredImage === index ? item.onHov : item.src}
                                    onMouseEnter={() => setHoveredImage(index)}
                                    onMouseLeave={() => setHoveredImage(null)}
                                    onClick={() => handleImageClick(item.href)}
                                    style={{ cursor: 'pointer' }}
                                />
                            </div>
                        </div>
                        <div className={`sm-info ${displayType ? 'light' : 'dark'}`}>
                            <div className='sm-info-li'>
                                <a href={item.href} target='_blank' rel="noopener noreferrer" style={{ color: pokeTheme_TWO }}>
                                    {item.label}
                                </a>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Socials;
