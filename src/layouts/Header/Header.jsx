import React, { useState } from "react";
import { AiOutlineSun } from "react-icons/ai";
import { FaRegMoon } from "react-icons/fa";
import { IconContext } from "react-icons";
import { POKE_COLORS } from "../../utils/PokeColors";
import './Header.css';

const Header = ({ onTabSelect, handleDisplaySelect, displayType, pokeTheme }) => {
    const [selected, setSelected] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleSelect = (index) => {
        setSelected(index);
        onTabSelect(index);
        setMenuOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    let pokeTheme_ONE = '';
    let pokeTheme_TWO = '';

    if (pokeTheme[0] && POKE_COLORS[pokeTheme[0]]) {
        pokeTheme_ONE = POKE_COLORS[pokeTheme[0]].base;
    }

    if (pokeTheme[1] && POKE_COLORS[pokeTheme[1]]) {
        pokeTheme_TWO = (POKE_COLORS[pokeTheme[1]].base === POKE_COLORS[pokeTheme[0]].base) ? POKE_COLORS[pokeTheme[0]].complementary : POKE_COLORS[pokeTheme[1]].base;
    }

    const selectedStyle = {
        borderBottom: `0.104vw solid ${pokeTheme_TWO}`,
        color: `${pokeTheme_TWO}`,
        fontWeight: 'bold',
    };

    const baseStyle = {
        cursor: 'pointer', // Add base style if needed
    };

    return (
        <div className='nav-header'>
            <div className={`red-bar ${displayType ? 'light' : 'dark'}`} style={{ backgroundColor: pokeTheme_ONE }}>
                <h4>Ryan Truong</h4>
                <button className={`menu-toggle`} onClick={toggleMenu}>
                    &#9776;
                </button>
            </div>
            <div className={`nav-list ${menuOpen ? 'open' : ''} ${displayType ? 'light' : 'dark'}`}>
                <ul>
                    {['Home', 'Skills', 'Projects', 'CV'].map((item, index) => (
                        <li
                            key={index}
                            className={selected === index ? 'selected' : ''}
                            style={selected === index ? selectedStyle : baseStyle}
                            onClick={() => handleSelect(index)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
                <div className='react-icons'>
                    <div className={`sun-icon ${displayType ? 'lightmode' : ''}`}>
                        <IconContext.Provider value={{ color: "#E1C16E", className: "contactIcon sun" }}>
                            <AiOutlineSun size={35} onClick={handleDisplaySelect} />
                        </IconContext.Provider>
                    </div>
                    <div className={`moon-icon ${!displayType ? 'darkmode' : ''}`}>
                        <IconContext.Provider value={{ color: "#4F6D7A", className: "contactIcon moon" }}
                        >
                            <FaRegMoon size={25} onClick={handleDisplaySelect} />
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
