import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "components/layout";
import Loading from "./components/loading";

const Render = React.lazy(() => import("./Render"));
const App = () => {
  return (
    <>
      <Main>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Render />} />
            <Route path="/:page" element={<Render />} />
            <Route path="/:page/:slug" element={<Render />} />
          </Routes>
        </Suspense>
      </Main>
    </>
  );
};

export default App;
