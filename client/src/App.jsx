import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "components/layout";
// import { Home, Room, Hotel, Notfound, About, Active  from './pages';
// import Loading from './components/loading';
import Render from "./Render";
const App = () => {
  return (
    <React.Fragment>
      <Main>
        <Routes>
          <Route path="/" element={<Render />} />
          <Route path="/:page" element={<Render />} />
          <Route path="/:page/:slug" element={<Render />} />
        </Routes>
      </Main>
    </React.Fragment>
  );
};

export default App;
