import React from "react";
import './App.css';
import { ReactDOM } from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Features from "./components/Features";
import Previous from "./components/Previous";
import Favorites from "./components/Favorites";

function App(){
  return(
    <Router>
      <div>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/featured" element={<Features />}></Route>
            <Route path="/previous" element={<Previous />}></Route>
            <Route path="/favorites" element={<Favorites/>}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App