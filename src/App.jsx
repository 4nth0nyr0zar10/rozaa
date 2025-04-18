import { useState } from 'react'
import {Route, BrowserRouter as Routers, Routes} from 'react-router-dom'
import CustomCursor from './wrapper/CustomPointer'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routers>
    <CustomCursor />
    <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        
        <Route path="/contact" element={<h1>Contact</h1>} />
        
      
     
      
      </Routes>
      </Routers>
    </>
  )
}

export default App
