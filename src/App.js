import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

/* 
  Main Layout includes the NavBars wrapping the pages
*/
import MainLayout from './components/layouts/mainLayout';

import Home from './pages/home';
import About from './pages/about';
import Teams from './pages/teams';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;