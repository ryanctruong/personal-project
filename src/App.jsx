import React, { useState } from 'react';
import NavBar from './components/header/header';
import Home from './components/content/home/home';
import Skills from './components/content/skills/skills';
import Projects from './components/content/projects/projects';
import Footer from './components/footer/footer';
import './styles/style.css';

function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const getTransformValue = () => {
    return `translateX(-${selectedTab * 100}%)`;
  };

  return (
    <div className='parent-container'>
      <NavBar onTabSelect={(index) => setSelectedTab(index)} />
      <div className='content'>
        <div className='content-wrapper' style={{ transform: getTransformValue() }}>
          <div className='content-item'>
            <Home />
          </div>
          <div className='content-item'>
            <Skills />
          </div>
          <div className='content-item'>
            <Projects />
          </div>
        </div>
      </div>
      <Footer className='footer' />
    </div>
  );
}

export default App;
