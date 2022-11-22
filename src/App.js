import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* 
  Main Layout includes the NavBars wrapping the pages
*/
import MainLayout from './components/layouts/mainLayout';

import Home from './pages/home.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route exact path = "/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;