import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Task1 from './tasks/task1/Task1';

const App = () => {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Navigate to="/task1" replace />} />
            <Route path="/task1" element={<Task1 />} />
            <Route path="*" element={<div style={{ padding: '20px' }}>Страница не найдена</div>} />
          </Routes>
        </main>
        
        <footer style={{ padding: '10px 20px', background: '#eee', textAlign: 'center', fontSize: '12px' }}>
          Интервью-платформа v1.0
        </footer>
      </div>
    </Router>
  );
};

export default App;
