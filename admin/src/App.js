import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Auth, Dashboard } from './Pages';
import { GoTop } from './components/common';

const App = () => {
  return (
    <main className="app">
      <Router>
        <Routes>
          <Route index element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
      />
      <GoTop />
    </main>
  );
};

export default App;
