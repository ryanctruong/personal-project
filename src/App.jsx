import React, { useEffect, useState } from 'react';
import { ColorExtractor } from 'react-color-extractor'
import fetchData from './utils/apiUtils';
import Header from './layouts/Header/Header';
import Home from './pages/Home/Home';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Socials from './pages/Socials/Socials';
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
  const [colors, setColors] = useState({
    baseColor: '',
    complementaryColor: '',
  });

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
      const frontDefault = data.sprites.other['official-artwork'].front_default;
      const frontShiny = data.sprites.other['official-artwork'].front_shiny;

      const availableImages = [];

      if (frontDefault) availableImages.push({ url: frontDefault, type: 'default' });
      if (frontShiny) availableImages.push({ url: frontShiny, type: 'shiny' });

      const randomChoice = availableImages[Math.floor(Math.random() * availableImages.length)];
      setPokeIMG(randomChoice.url);

      const pokemonName = randomChoice.type === 'shiny' ? `Shiny ${data.name}` : data.name;
      setPokeName(pokemonName);
    });
  };

  const getRandomColors = (colorArray) => {
    const indices = new Set();

    while (indices.size < 2) {
      indices.add(Math.floor(Math.random() * colorArray.length));
    }

    const [index1, index2] = [...indices];
    return [colorArray[index1], colorArray[index2]];
  };

  const handleColors = (extractedColors) => {
    const [base, complementary] = getRandomColors(extractedColors);
    setColors({
      baseColor: base,
      complementaryColor: complementary,
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
        <Header
          onTabSelect={(index) => setSelectedTab(index)}
          handleDisplaySelect={handleDisplaySelect}
          displayType={displayType}
          colors={colors}
          fetchPokemon={fetchPokemon}
        />
        <div className={`content ${displayType ? 'light' : 'dark'}`}>
          <div className="content-wrapper" style={{ transform: getTransformValue() }}>
            <div className="content-item home">
              {revealContainer && (
                <>
                  <ColorExtractor src={pokeIMG} getColors={handleColors} />
                  <Home
                    displayType={displayType}
                    pokeName={pokeName}
                    pokeIMG={pokeIMG}
                    fetchPokemon={fetchPokemon}
                    colors={colors}
                  />
                </>
              )}
            </div>
            <div className="content-item skills">
              <Skills selectedTab={selectedTab} displayType={displayType} colors={colors} />
            </div>
            <div className="content-item projects1">
              <Projects displayType={displayType} colors={colors} />
            </div>
            <div className="content-item socials">
              <Socials displayType={displayType} colors={colors} />
            </div>
          </div>
        </div>
        <Footer className="footer" displayType={displayType} />
      </div>
    </>
  );
}

export default App;