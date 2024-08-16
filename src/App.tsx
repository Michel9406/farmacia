import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './componentes/navbar/Navbar';
import Footer from './componentes/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
);
}
export default App;