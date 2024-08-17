import React, { useState } from "react";
import { AiOutlineSun } from "react-icons/ai";
import { FaRegMoon } from "react-icons/fa";
import { IconContext } from "react-icons";
import './Header.css';

const Header = ({ onTabSelect, handleDisplaySelect, displayType }) => {
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

    return (
        <div className='nav-header'>
            <div className='red-bar'>
                <h4>Ryan Truong</h4>
                <button className='menu-toggle' onClick={toggleMenu}>
                    &#9776;
                </button>
            </div>
            <div className={`nav-list ${menuOpen ? 'open' : ''}`}>
                <ul>
                    {['Home', 'Skills', 'Projects', 'CV'].map((item, index) => (
                        <li
                            key={index}
                            className={selected === index ? 'selected' : ''}
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
                        <IconContext.Provider value={{ color: "#36454F", className: "contactIcon moon" }}
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
