import Home from "./pages/functional/Home";
import { Routes, Route } from "react-router-dom";
import Create from "./pages/functional/movie/Create";
import Rated from "./pages/functional/movie/Rated";
import Playing from "./pages/functional/movie/Playing";
import Popular from "./pages/functional/movie/Popular";
import Layout from "./layouts/Layout";
import Detail from "./pages/functional/movie/Detail";
import React from "react";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/movie/add" element={<Create />}/>
          <Route path="/movie/rated" element={<Rated/>}/>
          <Route path="/movie/playing" element={<Playing/>}/>
          <Route path="/movie/popular" element={<Popular/>}/>
          <Route path="/movie/:id" element={<Detail/>}/>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
