import { useState, useEffect } from 'react'
import {Route, BrowserRouter as Routers, Routes} from 'react-router-dom'
import CustomCursor from './wrapper/CustomPointer'

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import { useRef } from 'react'
import Page404 from './Pages/404'
import ContactUs from './Pages/Contact'

function App() {
  
  useEffect(() => {
    const disableRightClick = (e) => {
      e.preventDefault();
    };
  
    document.addEventListener("contextmenu", disableRightClick);
  
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  return (
    <div className=" bg-slate-100 cursor-none overflow-hidden">
    <Routers>
    <CustomCursor />
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/contact" element={<ContactUs />} />
        
      
     
      <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
      </Routers>
    </div>
  )
}

export default App
