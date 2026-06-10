import React from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css'; 

function Home() {
  return (
    <div className="pagina-container">
      <h1>Bem-vindo ao Meu Portfólio!</h1>
     
      <br />
      
      <Link to="/sobre" className="btn-navegacao">
        Conhecer mais 
      </Link>
    </div>
  );
}

function Sobre() {
  return (
    <div className="pagina-container">
      <h2>Sobre Mim</h2>
      <p>Olá, meu nome é <strong>Amanda</strong>, tenho 17 anos e atualmente estou cursando o <strong>Técnico em Informática</strong>.</p>
      
      <div style={{ marginTop: '20px', marginBottom: '20px' }}>
        <p>📬 <strong>Contato:</strong> amandaprojeto@gmail.com</p>
      </div>

      <br />
      {/* Botão com Link interno levando para a página Projetos */}
      <Link to="/projetos" className="btn-navegacao">
        Ver meus Projetos
      </Link>
    </div>
  );
}
function Projetos() {
  return (
    <div className="pagina-container">
      <h2>Meus Projetos</h2>
      <ul className="lista-projetos">
        
        <li>
           <strong>Projeto 1 (GitHub):</strong>{' '}
          <a 
            href="https://github.com/amanddot/newamand" 
            target="_blank" 
            rel="noreferrer"
            className="link-externo"
          >
            Repositório NewAmand
          </a>
        </li>

        
        <li>
           <strong>Projeto 2 (CodeSandbox):</strong>{' '}
          <a 
            href="https://codesandbox.io/p/sandbox/site-tndgjc" 
            target="_blank" 
            rel="noreferrer"
            className="link-externo"
          >
            Site Institucional / Sandbox
          </a>
        </li>
      </ul>
      <br />
      
      <Link to="/" className="btn-navegacao">
        Voltar para a Home
      </Link>
    </div>
  );
}


export default function App() {
  return (
  
    <BrowserRouter>
      <div className="app-wrapper">
        
        
        <nav className="navbar">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "nav-link ativo" : "nav-link"}
          >
            Home
          </NavLink>
          <NavLink 
            to="/sobre" 
            className={({ isActive }) => isActive ? "nav-link ativo" : "nav-link"}
          >
            Sobre
          </NavLink>
          <NavLink 
            to="/projetos" 
            className={({ isActive }) => isActive ? "nav-link ativo" : "nav-link"}
          >
            Projetos
          </NavLink>
        </nav>

        
        <main className="conteudo-principal">
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/projetos" element={<Projetos />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}