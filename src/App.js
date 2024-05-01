import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import About from "./About";
import Login from "./Login";
import Privacy from "./Privacy";
import Terms from "./Terms";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/privacy" element={<Privacy />}></Route>
          <Route path="/terms" element={<Terms />}></Route>
        </Routes>
      </BrowserRouter>
      <div className="App">
        <div className="App-header">
          <Home />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
