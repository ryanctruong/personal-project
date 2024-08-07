import React, { useState } from "react";
import './navBar.css';

const NavBar = () => {
    const [selected, setSelected] = useState(0);

    const handleSelect = (index) => {
        setSelected(index);
    };

    return (
        <div className='nav-header'>
            <div className='red-bar'>
                <h4>Ryan Truong</h4>
            </div>
            <div className='nav-list'>
                <ul>
                    {['Home', 'About me', 'Skills', 'Extra', 'CV'].map((item, index) => (
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
