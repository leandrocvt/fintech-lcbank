import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Parcerias from './components/Parcerias';
import AbrirConta from './components/AbrirConta';
import AppMobile from './components/AppMobile';
import Banco from './components/Banco';
import QualidadeBanco from './components/QualidadeBanco';

function App() {
  return (
    <div className="main">
      <Router>
        <Header />
        <Inicio/>
        <Parcerias />
        <AbrirConta />
        <AppMobile />
        <Banco />
        <QualidadeBanco />
        <Routes>
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
