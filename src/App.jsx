import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // <-- fixed import
import Registration from './components/registration';
import Info from './components/infos';
import Update from './components/update';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/info" element={<Info />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;
