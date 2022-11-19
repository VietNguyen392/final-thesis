import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "components/layout";
import Render from "./Render";
import Loading from "components/loading";

const App = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Main>
        <Routes>
          <Route path="/" element={<Render />} />
          <Route path="/:page" element={<Render />} />
          <Route path="/:page/:slug" element={<Render />} />
        </Routes>
      </Main>
    </React.Suspense>
  );
};

export default App;
