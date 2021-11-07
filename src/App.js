import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Cartpage from "./pages/Cartpage"
import Homepage from './pages/Homepage'

import "./App.css"
import { ShoppingCartContextProvider } from './context/ShoppingCartContext';

function App() {

  return (
    <ShoppingCartContextProvider>
    <Router>
      <Routes>
        <Route path="/cart" element={<Cartpage/>}/>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
    </Router>
    </ShoppingCartContextProvider>
  );
}

export default App
