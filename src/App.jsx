import React, { useState } from 'react';
import NavBar from './components/header/header';
import Home from './components/content/home/home';
import Skills from './components/content/skills/skills';
import Projects from './components/content/projects/projects';
import Footer from './components/footer/footer';
import WelcomePage from './components/content/welcome/welcomePage';
import './styles/style.css';

function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [showWelcomePage, setShowWelcomePage] = useState(true);
  const [transitionClass, setTransitionClass] = useState('');
  const [revealContainer, setRevealContainer] = useState(false);

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

  return (
    <>
      {showWelcomePage ? (
        <WelcomePage
          onDownButtonClick={handleDownButtonClick}
          transitionClass={transitionClass}
        />
      ) : null}
      <div className={`parent-container ${revealContainer ? 'reveal' : ''}`}>
        <NavBar onTabSelect={(index) => setSelectedTab(index)} />
        <div className="content">
          <div className="content-wrapper" style={{ transform: getTransformValue() }}>
            <div className="content-item">
              <Home />
            </div>
            <div className="content-item">
              <Skills selectedTab={selectedTab} />
            </div>
            <div className="content-item">
              <Projects />
            </div>
          </div>
        </div>
        <Footer className="footer" />
      </div>
    </>
  );
}

export default App;