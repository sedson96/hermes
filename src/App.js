import React from 'react';
import logo from './logo.svg';
import {BrowserRouter} from "react-router-dom"
import "./reset.css"
import './App.css';
import routes from "./routes"

function App() {
  return (
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  );
}

export default App;
