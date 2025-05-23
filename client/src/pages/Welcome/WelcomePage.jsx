import React from 'react';
import useStore from '../../utils/VariableStore';
import './WelcomePage.css';

const WelcomePage = ({ onDownButtonClick, transitionClass }) => {
    const { displayType } = useStore((state) => ({ displayType: state.displayType }));

    return (
        <div className={`welcome-page ${transitionClass} ${displayType ? 'light' : 'dark'}`}>
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
