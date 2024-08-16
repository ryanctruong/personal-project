import React, { useState } from 'react';
import Header from './layouts/Header/Header';
import Home from './pages/Home/Home';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Footer from './layouts/Footer/Footer';
import WelcomePage from './pages/Welcome/WelcomePage';
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
        <Header onTabSelect={(index) => setSelectedTab(index)} />
        <div className="content">
          <div className="content-wrapper" style={{ transform: getTransformValue() }}>
            <div className="content-item">
              <Home />
            </div>
            <div className="content-item">
              {/* <Skills selectedTab={selectedTab} /> */}
            </div>
            <div className="content-item">
              {/* <Projects /> */}
            </div>
          </div>
        </div>
        <Footer className="footer" />
      </div>
    </>
  );
}

export default App;