import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Terms from "./Terms"
import Privacy from "./Privacy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/Partner"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/Partner/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/Partner/privacy"
          element={
            <Layout>
              <Privacy />
            </Layout>
          }
        />
        <Route
          path="/Partner/terms"
          element={
            <Layout>
              <Terms />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
