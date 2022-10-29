import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Parcerias from './components/Parcerias';

function App() {
  return (
    <div className="main">
      <Router>
        <Header />
        <Inicio/>
        <Parcerias />
        <Routes>
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
