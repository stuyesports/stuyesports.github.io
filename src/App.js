import './App.css';
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";

/* 
  Main Layout includes the NavBars wrapping the pages
*/
import MainLayout from './components/layouts/mainLayout';

import Home from './pages/home';
import About from './pages/about';
import Teams from './pages/teams';
import Roster from './pages/roster';
import Partners from './pages/partners';
import Contact from './pages/contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/valorant" element={<Roster game="Valorant" />} />
          <Route path="/teams/league" element={<Roster game="League" />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;