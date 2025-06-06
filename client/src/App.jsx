import { Tooltip } from 'react-tooltip'
import { ColorExtractor } from 'react-color-extractor'
import useStore from './utils/VariableStore';
import Header from './layouts/Header/Header';
import Home from './pages/Home/Home';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Socials from './pages/Socials/Socials';
import Footer from './layouts/Footer/Footer';
import { handleRandomColors } from './utils/FetchPokemon';
import './styles/style.css';

function App() {
    const handleColors = handleRandomColors();
    const {
        displayType,
        pokeIMG,
        selectedTab,
    } = useStore((state) => ({
        displayType: state.displayType,
        pokeIMG: state.pokeIMG,
        selectedTab: state.selectedTab,
    }));

    return (
        <>
            <Tooltip id="my-tooltip" style={{ fontFamily: 'Montserrat', fontSize: '0.75rem', zIndex: '2000' }} />
            <ColorExtractor src={pokeIMG} getColors={handleColors} />
            <div className={`parent-container reveal ${displayType ? 'light' : 'dark'}`}>
                <Header />
                <div className={`content ${displayType ? 'light' : 'dark'}`}>
                    <div className="content-wrapper" style={{ transform: `translateX(-${selectedTab * 100}%)` }}>
                        <Home />
                        <Skills />
                        <Projects />
                        <Socials />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default App;