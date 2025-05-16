import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/login.jsx";
import Cadastro from "./pages/Tela-Cadastro.jsx";
import Erro_indefinido from "./pages/erro_indefinido.jsx";
import Tela_acerto from "./pages/Tela-acerto.jsx";
import './App.css';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
             <Route path="/" element={<Login />}/> 
            <Route path="/cadastro" element={<Cadastro />}/>
            <Route path="/verificacao" element={<Tela_acerto />}/>
            <Route path="/erro_indefinido" element={<Erro_indefinido/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
