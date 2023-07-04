import './App.css';
import React, {useState, useEffect, useRef} from 'react';
import {Helmet} from "react-helmet";
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
  const wrapperRef = useRef(null);

  const handleScroll = () => {
    if(wrapperRef && wrapperRef.current){
      const wrapper = wrapperRef.current;
      const windowHeight = window.innerHeight;
      const wrapperHeight = wrapper.scrollHeight;
      const scrollTop = wrapper.scrollTop;
      if (wrapperHeight > windowHeight && scrollTop > 60) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
    }
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
    <Helmet>
        <meta charSet="utf-8" />
        <title>Ridge Makavelli</title>
        <link rel="canonical" href="http://www.ridgemakavelli.com/music" />
        <meta name="description" content="Ridge Makavelli" />
    </Helmet>
    <Navbar className="navbar" hidden = {shouldHide} showNavbar={showNavbar} inBooks = {inBooks} inMusic= {inMusic}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music handleScroll={handleScroll} musicWrapperRef={wrapperRef}/>} />
        <Route path="/books" element={<Books handleScroll={handleScroll} bookWrapperRef={wrapperRef} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
