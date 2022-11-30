import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* 
  Main Layout includes the NavBars wrapping the pages
*/
import MainLayout from './components/layouts/mainLayout';

import Home from './pages/home.js';
import About from './pages/about';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;