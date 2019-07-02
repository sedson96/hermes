import React from 'react';
import logo from './logo.svg';
import './App.css';
import Uppernav from './components/Nav/Uppernav';
import MainNav from './components/Nav/MainNav';
import TopHead from './components/Landing/TopHead';
import LandingCategories from './components/Landing/LandingCategories';
import LandingFeatured from './components/Landing/LandingFeatured';

function App() {
  return (
    <>
      <Uppernav/>
      <MainNav/>
      <TopHead/>
      <LandingCategories/>
      <LandingFeatured/>
    </>
  );
}

export default App;
