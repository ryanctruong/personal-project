import React, { useEffect, useState } from 'react';
import Header from './layouts/Header/Header';
import Home from './pages/Home/Home';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Footer from './layouts/Footer/Footer';
import WelcomePage from './pages/Welcome/WelcomePage';
import './styles/style.css';

function App() {
  const checkIsDarkSchemePreferred = () => window?.matchMedia?.('(prefers-color-scheme:light)')?.matches ?? false;
  const [selectedTab, setSelectedTab] = useState(0);
  const [showWelcomePage, setShowWelcomePage] = useState(true);
  const [transitionClass, setTransitionClass] = useState('');
  const [revealContainer, setRevealContainer] = useState(false);
  const [displayType, setDisplay] = useState(checkIsDarkSchemePreferred());

  const getTransformValue = () => {
    return `translateX(-${selectedTab * 100}%)`;
  };

  const handleDownButtonClick = () => {
    setTransitionClass('slide-up');
    setRevealContainer(true);
    setTimeout(() => {
      setShowWelcomePage(false);
    }, 1000);
  };

  const handleDisplaySelect = () => {
    setDisplay(!displayType);
  }

  return (
    <>
      {showWelcomePage ? (
        <WelcomePage
          onDownButtonClick={handleDownButtonClick}
          transitionClass={transitionClass}
        />
      ) : null}
      <div className={`parent-container ${revealContainer ? 'reveal' : ''} ${displayType ? 'light' : 'dark'}`}>
        <Header onTabSelect={(index) => setSelectedTab(index)} handleDisplaySelect={handleDisplaySelect} displayType={displayType} />
        <div className={`content ${displayType ? 'light' : 'dark'}`}>
          <div className="content-wrapper" style={{ transform: getTransformValue() }}>
            <div className="content-item">
              {revealContainer && ( /* could potentially allow us to add animations */
                <Home displayType={displayType} />
              )}
            </div>
            <div className="content-item">
              {/* <Skills selectedTab={selectedTab} /> */}
            </div>
            <div className="content-item">
              {/* <Projects /> */}
            </div>
          </div>
        </div>
        <Footer className="footer" displayType={displayType} />
      </div>
    </>
  );
}

export default App;