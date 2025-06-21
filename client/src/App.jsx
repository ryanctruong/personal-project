import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Tooltip } from 'react-tooltip'
import useStore from './utils/VariableStore';
import Header from './layouts/Header/Header';
import Home from './pages/Home/Home';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Socials from './pages/Socials/Socials';
import VertexAI from './pages/VertexAI/VertexAI';
import Footer from './layouts/Footer/Footer';
import './styles/style.css';

const secret_mega_key = import.meta.env.VITE_SECRET_MEGA_KEY;

function App() {
    const {
        displayType,
        selectedTab,
    } = useStore((state) => ({
        displayType: state.displayType,
        pokeIMG: state.pokeIMG,
        selectedTab: state.selectedTab,
    }));

    return (
        <BrowserRouter>
            <Tooltip id="my-tooltip" style={{ fontFamily: 'Montserrat', fontSize: '0.75rem', zIndex: '2000' }} />
            <Routes>
                <Route path='/' element={(
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
                )} />
                <Route path={`/${secret_mega_key}`} element={<VertexAI />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;