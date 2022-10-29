import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="main">
      <Router>
        <Header />  
        <Routes>
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
