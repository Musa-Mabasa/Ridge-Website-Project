import './App.css';
import React from 'react';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Music from './pages/Music';
import Contacts from './pages/Contacts';
import Books from './pages/Books';
import About from './pages/About';
import {Route, Routes, useLocation} from 'react-router-dom'

function App() {
  const location = useLocation();
  const { pathname } = location;
  const shouldHide = pathname === '/';
  return (
    <>
    <div className="App">
    <Navbar className="navbar" hidden = {shouldHide}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/books" element={<Books />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
