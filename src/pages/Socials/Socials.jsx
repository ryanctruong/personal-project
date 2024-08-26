import React from 'react'
import './styles/socials.css'

const Socials = ({ displayType, colors }) => {
    const pokeTheme_ONE = colors.baseColor;
    const pokeTheme_TWO = colors.complementaryColor;

    return (
        <div className={`socials-main-box`}>
            <div className={`social-media ${displayType ? 'light' : 'dark'}`} style={{ boxShadow: `0 0 0.5em ${pokeTheme_ONE}` }}> </div>
            <div className={`social-media ${displayType ? 'light' : 'dark'}`} style={{ boxShadow: `0 0 0.5em ${pokeTheme_ONE}` }}> </div>
            <div className={`social-media ${displayType ? 'light' : 'dark'}`} style={{ boxShadow: `0 0 0.5em ${pokeTheme_ONE}` }}> </div>
            <div className={`social-media ${displayType ? 'light' : 'dark'}`} style={{ boxShadow: `0 0 0.5em ${pokeTheme_ONE}` }}> </div>
        </div>
    );
}

export default Socials;