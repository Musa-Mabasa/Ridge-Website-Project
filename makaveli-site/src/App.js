import './App.css';
import React, {useState, useEffect, useRef} from 'react';
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
  const inBooks = pathname === '/books';
  const inMusic = pathname === '/music';

  const [showNavbar, setShowNavbar] = useState(true);
  const bookWrapperRef = useRef(null);

  const handleScroll = () => {
    const bookWrapper = bookWrapperRef.current;
    const windowHeight = window.innerHeight;
    const wrapperHeight = bookWrapper.scrollHeight;
    const scrollTop = bookWrapper.scrollTop;
    if (wrapperHeight > windowHeight && scrollTop > 0) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  return (
    <>
    <div className="App">
    <Navbar className="navbar" hidden = {shouldHide} showNavbar={showNavbar} inBooks = {inBooks} inMusic= {inMusic}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/books" element={<Books handleScroll={handleScroll} bookWrapperRef={bookWrapperRef} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
