import React from 'react'
import Filters from './Filters'
import MainContent from './MainContent'
import Header from './Header';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <Header/>
      <Filters/>
      <MainContent/>
    </div>
  )
}
