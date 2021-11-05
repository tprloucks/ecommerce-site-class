import React from 'react'
import {
  BrowserRouter as Router, Route
} from "react-router-dom";
import Cartpage from "./pages/Cartpage"
import Homepage from './pages/Homepage'

import "./App.css"

function App() {
  return (
    <Router>
      {/* <Homepage /> */}
      <Cartpage />

    </Router>
  );
}

export default App
