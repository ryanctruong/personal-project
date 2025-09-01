// App.jsx
import './index.css'
import Header from './layout/Header/Header'
import Sidebar from './layout/Sidebar/Sidebar'
import Home from './pages/Home/Home'
import Skills from './pages/Skills/Skills'

const App = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <main className="fixed top-[64px] left-[64px] right-0 bottom-0 overflow-y-auto scroll-smooth scroll-snap-y scroll-snap-mandatory bg-white">
                <section className="h-[calc(100vh-64px)] scroll-snap-start flex items-center justify-center">
                    <Home />
                </section>
                <section className="h-[calc(100vh-64px)] scroll-snap-start flex items-center justify-center">
                    <Skills />
                </section>
            </main>
        </>
    )
}

export default App;