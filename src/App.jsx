// import { BrowserRouter, Route } from 'react-router-dom';
// import './App.css';
// import { BrowserRouter as Routes, Route } from 'react-router-dom';
// import Home from './components/Home'
// function App() {

//   return (

//     <BrowserRouter>
//       <Routes>
//           <Route path='/'element={<Home />}></Route>
//       </Routes>
//     </BrowserRouter>

//   )
// }

// export default App
import React from "react";
import { ReactDOM } from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";

function App(){
  return(
    <Router>
      <div>
        <h1>React Router</h1>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
export default App