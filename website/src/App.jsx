import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/layout';
import { Home, Room, Hotel, Notfound, About } from './pages';
import Loading from './components/loading';
import AuthPage from './components/AuthPage';

const App = () => {
  return (
    <React.Fragment>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="room" element={<Room />} />
          <Route path="hotel" element={<Hotel />} />
          <Route path="about" element={<About />} />
          <Route path="auth" element={<AuthPage />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Main>
    </React.Fragment>
  );
};

export default App;
