import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'

import Header from './layout/Header/Header'
import Sidebar from './layout/Sidebar/Sidebar'

const App = () => {
    return (
        <>
            <Header />
            <Sidebar />
        </>

    )
}

export default App;