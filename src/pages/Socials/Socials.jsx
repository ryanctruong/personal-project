import React from 'react'
import './styles/socials.css'
import './styles/socials-list.css'

import linkedin from '/images/sm/linkedin-bh.svg'
import github from '/images/sm/github-bh.svg'
import gmail from '/images/sm/gmail-bh.svg'
import cv from '/images/sm/cv-bh.svg'

const Socials = ({ displayType, colors }) => {
    const pokeTheme_ONE = colors.baseColor;
    const pokeTheme_TWO = colors.complementaryColor;

    return (
        <div className={`socials-main-box`}>
            <div className='socials-list'>
                <div className={`social-media ${displayType ? 'light' : 'dark'}`} style={{ boxShadow: `0 0 0.5em ${pokeTheme_ONE}` }}>
                    <div className='pic-container-flex-end'>
                        <div className='sm-pic-container'>
                            <img src={linkedin} />
                        </div>
                    </div>
                    <div className={`sm-info ${displayType ? 'light' : 'dark'}`}>
                        <div className='sm-info-li'>
                            <a href="https://www.linkedin.com/in/ryanctruong/" target='__blank' rel="noopener noreferrer" style={{ color: pokeTheme_TWO }}>Linkedin</a>
                            <p>Connect with me!</p>
                        </div>
                    </div>
                </div>
                <div className={`social-media ${displayType ? 'light' : 'dark'}`} style={{ boxShadow: `0 0 0.5em ${pokeTheme_ONE}` }}>
                    <div className='pic-container-flex-end'>
                        <div className='sm-pic-container'>
                            <img src={github} />
                        </div>
                    </div>
                    <div className={`sm-info ${displayType ? 'light' : 'dark'}`}>
                        <div className='sm-info-li'>
                            <a href="https://github.com/ryanctruong" target='__blank' rel="noopener noreferrer" style={{ color: pokeTheme_TWO }}>Github</a>
                            <p>Check out my code!</p>
                        </div>
                    </div>
                </div>
                <div className={`social-media ${displayType ? 'light' : 'dark'}`} style={{ boxShadow: `0 0 0.5em ${pokeTheme_ONE}` }}>
                    <div className='pic-container-flex-end'>
                        <div className='sm-pic-container'>
                            <img src={gmail} />
                        </div>
                    </div>
                    <div className={`sm-info ${displayType ? 'light' : 'dark'}`}>
                        <div className='sm-info-li'>
                            <a href="mailto:rtruong.cs@gmail.com" target='_blank' rel="noopener noreferrer" style={{ color: pokeTheme_TWO }}>Gmail</a>
                            <p>Contact Me!</p>
                        </div>
                    </div>

                </div>
                <div className={`social-media ${displayType ? 'light' : 'dark'}`} style={{ boxShadow: `0 0 0.5em ${pokeTheme_ONE}` }}>
                    <div className='pic-container-flex-end'>
                        <div className='sm-pic-container'>
                            <img src={cv} />
                        </div>
                    </div>
                    <div className={`sm-info ${displayType ? 'light' : 'dark'}`}>
                        <div className='sm-info-li'>
                            <a href={''} target='__blank' rel="noopener noreferrer" style={{ color: pokeTheme_TWO }}>CV</a>
                            <p>Last Updated: 09/01/2024</p>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default Socials;