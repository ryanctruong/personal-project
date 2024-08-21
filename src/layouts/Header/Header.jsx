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

    const selectedStyle = {
        borderBottom: `0.104vw solid ${POKE_COLORS[pokeTheme[1]]}`,
        color: `${POKE_COLORS[pokeTheme[1]]}`,
        fontWeight: 'bold',
    };

    const baseStyle = {
        cursor: 'pointer', // Add base style if needed
    };

    return (
        <div className='nav-header'>
            <div className={`red-bar ${displayType ? 'light' : 'dark'}`} style={{ backgroundColor: POKE_COLORS[pokeTheme[0]] }}>
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
