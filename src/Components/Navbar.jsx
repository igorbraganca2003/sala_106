import React from 'react';
import Localizacao from '../Paginas/Localizacao'
import { Link, Route, BrowserRouter as  Router, Routes } from "react-router-dom";
import SaibaMais from './BotaoSaibaMais';

export default function NavBar() {
  return (
    <div className='nav_bar'>
      <div className="esquerda">
        <h1>Logo</h1>
        <ol>
          <Link to="/">Home</Link>
          <Link to= "/localizacao">Localização</Link>
          <Link to="/servicos">Serviços</Link>
        </ol>
      </div>
      <a href="#">
        <SaibaMais />
      </a>
    </div>
  );
}
