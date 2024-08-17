import React, { useState } from "react";
import './Header.css';

const Header = ({ onTabSelect }) => {
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
            </div>
        </div>
    )
}

export default Header;
