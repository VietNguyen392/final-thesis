import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Main from "components/layout";
// import { Home, Room, Hotel, Notfound, About, Active  from './pages';
// import Loading from './components/loading';
import Render from "./Render";
import { refreshToken } from "features/auth/authSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);
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
