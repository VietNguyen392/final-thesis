import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "components/layout";
import Render from "./Render";
const App = () => {
  return (
    <>
      <Main>
        <Routes>
          <Route path="/" element={<Render />} />
          <Route path="/:page" element={<Render />} />
          <Route path="/:page/:slug" element={<Render />} />
        </Routes>
      </Main>
    </>
  );
};

export default App;
