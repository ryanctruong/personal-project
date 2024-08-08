import React, { useState } from 'react';

import NavBar from './components/header/header';
import Home from './components/content/home/home';
import Skills from './components/content/skill/skills';
import Project from './components/content/project/project';
import CV from './components/content/cv/cv';
import Extra from './components/content/extra/extra';
import Footer from './components/footer/footer';

import './styles/style.css';

function App() {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
    { component: <Home />, key: 'Home' },
    { component: <Skills />, key: 'Skills' },
    { component: <Project />, key: 'Project' },
    { component: <CV />, key: 'CV' },
    { component: <Extra />, key: 'Extra' },
  ];

  return (
    <div className='parent-container'>
      <NavBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className='content'>
        {tabs.map((tab, index) => (
          <div key={tab.key} className={`tab-content ${selectedTab === index ? 'active' : ''}`}>
            {tab.component}
          </div>
        ))}
      </div>
      <Footer className='footer' />
    </div>
  );
}

export default App;
