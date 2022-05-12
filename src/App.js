import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/route';
import Header from './header';
import './App.css';

function App() {
  return (
  <BrowserRouter>
    <Router/>
  </BrowserRouter>
  
  );
}

export default App;
