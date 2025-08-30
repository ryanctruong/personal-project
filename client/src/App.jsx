import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'

import Header from './layout/Header/Header'
import Sidebar from './layout/Sidebar/Sidebar'
import Home from './pages/Home/Home'

const App = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <div className="flex justify-center items-center h-screen w-screen ">
                <Home />
            </div>

        </>

    )
}

export default App;