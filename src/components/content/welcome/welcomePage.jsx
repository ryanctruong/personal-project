import React from 'react';
import './welcomePage.css';

const WelcomePage = ({ onDownButtonClick, transitionClass }) => {
    return (
        <div className={`welcome-page ${transitionClass}`}>
            <div className="welcome-text">
                <h1>Ryan Truong</h1>
            </div>
            <button className="down-button" onClick={onDownButtonClick}>
                &#x25BC;
            </button>
        </div>
    );
};

export default WelcomePage;
