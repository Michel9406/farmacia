import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './componentes/navbar/Navbar';
import Footer from './componentes/footer/Footer';
import FormularioCategoria from './categoria/formularioCategoria/FormularioCategoria'
import ListaCategorias from './categoria/listaCategoria/ListaCategoria'
import DeletarCategoria from './categoria/deletarCategoria/DeletarCategoria'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias/>}></Route>
            <Route path="/cadastroCategoria" element={<FormularioCategoria/>}></Route>
            <Route path="/editarCategoria/:id" element={<FormularioCategoria/>}></Route>
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria/>}></Route>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
);
}
export default App;