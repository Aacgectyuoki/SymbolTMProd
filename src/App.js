import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DefaultPage from './components/DefaultPage';  // Adjust path based on folder structure
import AboutPage from './components/AboutPage';

import WellzyPerksPage from './pages/WellzyPerksPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/about" element={<AboutPage />} />
        
        <Route path="/projects/wellzyperks" element={<WellzyPerksPage />} />
      </Routes>
    </Router>
  );
}

export default App;