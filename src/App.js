import './App.css';
import './Components/Navbar'
import React from "react";
import NavBar from './Components/Navbar';
import Banner from './Components/Banner';
import Servicos from './Components/Servicos';
import OqueOferecemos from './Components/OqueOferecemos'
import QuemPassouAqui from './Components/QuemPassouAqui';
import AlgumaDuvida from './Components/AlgumaDuvida'
import Rodape from './Components/Rodape'


function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Servicos/>
      <OqueOferecemos/>
      <QuemPassouAqui/>
      <AlgumaDuvida/>
      <Rodape/>
    </div>
  );
}

export default App;
