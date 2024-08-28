import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './styles/socials.css';
import './styles/socials-list.css';

import linkedin from '/images/sm/linkedin-bh.svg';
import linkedinTongue from '/images/sm/linkedin-tongue.svg'
import github from '/images/sm/github-bh.svg';
import githubTongue from '/images/sm/github-tongue.svg'
import gmail from '/images/sm/gmail-bh.svg';
import gmailTongue from '/images/sm/gmail-tongue.svg'
import cv from '/images/sm/cv-bh.svg';
import cvTongue from '/images/sm/cv-tongue.svg'

const Socials = ({ displayType, colors }) => {
    const [hoveredImage, setHoveredImage] = useState(null);
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
                {[{
                    src: linkedin,
                    onHov: linkedinTongue,
                    href: "https://www.linkedin.com/in/ryanctruong/",
                    label: "Linkedin",
                    description: "Connect with me!"
                }, {
                    src: github,
                    onHov: githubTongue,
                    href: "https://github.com/ryanctruong",
                    label: "Github",
                    description: "Check out my code!"
                }, {
                    src: gmail,
                    onHov: gmailTongue,
                    href: "mailto:rtruong.cs@gmail.com",
                    label: "Gmail",
                    description: "Contact Me!"
                }, {
                    src: cv,
                    onHov: cvTongue,
                    href: "",
                    label: "CV",
                    description: "Last Updated: 09/01/2024"
                }].map((item, index) => (
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
