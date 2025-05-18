import React, { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip'
import { ColorExtractor } from 'react-color-extractor'
import fetchData from './utils/ApiUtils';
import Header from './layouts/Header/Header';
import Home from './pages/Home/Home';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Socials from './pages/Socials/Socials';
import Footer from './layouts/Footer/Footer';
import './styles/style.css';

import useStore from './utils/VariableStore';

function App() {
  const [selectedTab, setSelectedTab] = useState(0);

  const {
    displayType,
    pokeIMG,
    setColors,
    setPokeName,
    setPokeIMG
  } = useStore((state) => ({
    displayType: state.displayType,
    pokeIMG: state.pokeIMG,
    setColors: state.setColors,
    setPokeName: state.setPokeName,
    setPokeIMG: state.setPokeIMG
  }));

  const getTransformValue = () => {
    return `translateX(-${selectedTab * 100}%)`;
  };

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
      <div className={`parent-container reveal ${displayType ? 'light' : 'dark'}`}>
        <Tooltip id="my-tooltip" style={{ fontFamily: 'Montserrat', fontSize: '0.75rem', zIndex: '2000' }} />
        <Header
          onTabSelect={(index) => setSelectedTab(index)}
          fetchPokemon={fetchPokemon}
        />
        <div className={`content ${displayType ? 'light' : 'dark'}`}>
          <div className="content-wrapper" style={{ transform: getTransformValue() }}>
            <div className="content-item home">
              <>
                <ColorExtractor src={pokeIMG} getColors={handleColors} />
                <Home
                  fetchPokemon={fetchPokemon}
                />
              </>
            </div>
            <div className="content-item skills">
              <Skills selectedTab={selectedTab} />
            </div>
            <div className="content-item projects1">
              <Projects />
            </div>
            <div className="content-item socials">
              <Socials key={selectedTab} />
            </div>
          </div>
        </div>
        <Footer className="footer" />
      </div>
    </>
  );
}

export default App;