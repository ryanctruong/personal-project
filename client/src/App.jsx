import { useEffect, useRef, useState } from 'react'
import './index.css'
import Header from './layout/Header/Header'
import Sidebar from './layout/Sidebar/Sidebar'
import Home from './pages/Home/Home'
import Skills from './pages/Skills/Skills'
import FadeSection from './components/FadeSection'

const App = () => {
    const scrollRef = useRef(null)
    const [rootEl, setRootEl] = useState(null)

    useEffect(() => {
        setRootEl(scrollRef.current)
    }, [])

    return (
        <>
            <Header />
            <Sidebar />
            <main ref={scrollRef} id="scrollRoot" className="fixed top-[64px] left-[64px] right-0 bottom-0 overflow-y-auto scroll-smooth scroll-snap-y scroll-snap-mandatory bg-white" >
                <FadeSection root={rootEl} className="h-[calc(100vh-64px)] scroll-snap-start flex items-center justify-center">
                    <Home />
                </FadeSection>
                <FadeSection root={rootEl} className="h-[calc(100vh-64px)] scroll-snap-start flex items-center justify-center">
                    <Skills />
                </FadeSection>
            </main>
        </>
    )
}

export default App
