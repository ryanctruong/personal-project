import React from "react";
import './header.css';

const NavBar = ({ selectedTab, setSelectedTab }) => {

    const handleSelect = (index) => {
        setSelectedTab(index);
    };

    return (
        <div className='nav-header'>
            <div className='red-bar'>
                <h4>Ryan Truong</h4>
            </div>
            <div className='nav-list'>
                <ul>
                    {['Home', 'Skills', 'Projects', 'CV', 'Extra '].map((item, index) => (
                        <li
                            key={index}
                            className={selectedTab === index ? 'selected' : ''}
                            onClick={() => handleSelect(index)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
