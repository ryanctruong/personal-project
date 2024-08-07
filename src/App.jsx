import { useState } from 'react'

import NavBar from './components/header/header';
import Footer from './components/footer/footer';

import './styles/style.css'

function App() {

  return (
    <div className='parent-container'>
      <NavBar />
      <div className='content'>
      </div>
      <Footer className='footer' />
    </div>

  )
}

export default App;
