
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';





function App() {
  

  return (
    <BrowserRouter>
      

        <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App
