import { useState } from 'react'

import NavBar from './components/header/header';
import Home from './components/content/home/home';
import Footer from './components/footer/footer';

import './styles/style.css'

function App() {

  return (
    <div className='parent-container'>
      <NavBar />
      <div className='content'>
        <Home />
      </div>
      <Footer className='footer' />
    </div>

  )
}

export default App;
