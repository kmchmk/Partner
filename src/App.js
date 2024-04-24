import BannerImage from "./components/BannerImage";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Boys from "./Pages/Boys";
import Girls from "./Pages/Girls";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/boys' element={<Boys/>}></Route>
          <Route path='/girls' element={<Girls/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
