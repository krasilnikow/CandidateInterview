import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';

const Task1 = lazy(() => import('./tasks/task1/Task1'));
const Task2 = lazy(() => import('./tasks/task2/Task2'));
const Task100 = lazy(() => import('./tasks/task100/Task100'));

const App = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <main style={{ flex: 1 }}>
          <Suspense fallback={<div style={{ padding: '20px' }}></div>}>
            <Routes>
              <Route path="/" element={<Navigate to="/task1" replace />} />
              <Route path="/task1" element={<Task1 />} />
              <Route path="/task2" element={<Task2 />} />
              <Route path="/task100" element={<Task100 />} />
              <Route path="*" element={<div style={{ padding: '20px' }}>Страница не найдена</div>} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
};

export default App;
