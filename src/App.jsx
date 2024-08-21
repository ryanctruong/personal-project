import React, { useEffect, useState } from 'react';
import fetchData from './utils/apiUtils';
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
  const [pokeName, setPokeName] = useState('');
  const [pokeIMG, setPokeIMG] = useState('');
  const [pokeTheme, setPokeTheme] = useState(['', '']);

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

  const fetchPokemon = () => {
    const number = Math.floor(Math.random() * 1025) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${number}`;

    fetchData(url, (data) => {
      setPokeName(data.name);
      setPokeIMG(data.sprites.other['official-artwork'].front_default);

      if (data.types) {
        const types = data.types.map(typeInfo => typeInfo.type.name);
        const updatedTypes = [
          types[0],
          types[1] || types[0] || ''
        ];
        setPokeTheme(updatedTypes);
      }
    });
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <>
      {showWelcomePage ? (
        <WelcomePage
          onDownButtonClick={handleDownButtonClick}
          transitionClass={transitionClass}
          displayType={displayType}
        />
      ) : null}
      <div className={`parent-container ${revealContainer ? 'reveal' : ''} ${displayType ? 'light' : 'dark'}`}>
        <Header onTabSelect={(index) => setSelectedTab(index)} handleDisplaySelect={handleDisplaySelect} displayType={displayType} pokeTheme={pokeTheme} />
        <div className={`content ${displayType ? 'light' : 'dark'}`}>
          <div className="content-wrapper" style={{ transform: getTransformValue() }}>
            <div className="content-item">
              {revealContainer && (
                <Home displayType={displayType} pokeName={pokeName} pokeIMG={pokeIMG} pokeTheme={pokeTheme} fetchPokemon={fetchPokemon} />
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