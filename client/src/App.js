import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from 'Components/layout';
import { Home, Room, Hotel, Notfound, About } from 'Pages';
import Loading from 'Components/loading';

const App = () => {
  return (
    <React.Fragment>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="room" element={<Room />} />
          <Route path="hotel" element={<Hotel />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Main>
    </React.Fragment>
  );
};

export default App;
