import React, { useState } from "react";
import { AiOutlineSun } from "react-icons/ai";
import { FaExchangeAlt } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { IconContext } from "react-icons";
import useStore from "../../utils/VariableStore";
import './Header.css';

const Header = ({ onTabSelect, fetchPokemon }) => {
    const [selected, setSelected] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

  const {
    colors,
    displayType,
    setDisplay
  } = useStore((state) => ({
    colors: state.colors,
    displayType: state.displayType,
    setDisplay: state.setDisplay
  }));

    const handleSelect = (index) => {
        setSelected(index);
        onTabSelect(index);
        setMenuOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const pokeTheme_ONE = colors.baseColor;

    const selectedStyle = {
        borderBottom: `0.104vw solid ${pokeTheme_ONE}`,
        color: `${pokeTheme_ONE}`,
        fontWeight: 'bold',
    };

    const baseStyle = {
        cursor: 'pointer',
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
                    {['Home', 'Skills', 'Projects', 'Socials'].map((item, index) => (
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
                    <a data-tooltip-id="my-tooltip" data-tooltip-content={`Switch to ${displayType ? 'darkmode' : 'lightmode'}!`} data-tooltip-place="top" data-tooltip-offset={10}>
                        <div className={`sun-icon ${displayType ? 'lightmode' : ''}`}>
                            <IconContext.Provider value={{ color: "#E1C16E", className: "contactIcon sun" }}>
                                <AiOutlineSun size={35} onClick={() => setDisplay(!displayType)} />
                            </IconContext.Provider>
                        </div>

                        <div className={`moon-icon ${!displayType ? 'darkmode' : ''}`}>
                            <IconContext.Provider value={{ color: "#4F6D7A", className: "contactIcon moon" }}
                            >
                                <FaRegMoon size={25} onClick={() => setDisplay(!displayType)} />
                            </IconContext.Provider>
                        </div>
                    </a>
                    <a data-tooltip-id="my-tooltip" data-tooltip-content="Switch the theme!" data-tooltip-place="top" data-tooltip-offset={10}>
                        <div className={`wand-icon`}>
                            <IconContext.Provider value={{ color: "#696969", className: "contactIcon wand" }}>
                                <FaExchangeAlt size={25} onClick={fetchPokemon} />
                            </IconContext.Provider>
                        </div>
                    </a>
                </div>

            </div>
        </div >
    )
}

export default Header;
