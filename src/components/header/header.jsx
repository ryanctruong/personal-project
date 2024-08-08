import React, { useState } from "react";
import './header.css';

const NavBar = ({ onTabSelect }) => {
    const [selected, setSelected] = useState(0);

    const handleSelect = (index) => {
        setSelected(index);
        onTabSelect(index);
    };

    return (
        <div className='nav-header'>
            <div className='red-bar'>
                <h4>Ryan Truong</h4>
            </div>
            <div className='nav-list'>
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

export default NavBar;
