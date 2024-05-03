import React from "react";
import Filters from "./Components/Filters";
import MainContent from "./Components/MainContent";
import Header from "./Components/Header";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <Filters />
      <MainContent />
    </div>
  );
}
