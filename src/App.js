import * as React from 'react';
import './App.css';
import Navbar from './components/navbar';
import 'animate.css';

import { BrowserRouter as Router, Route, Link, useNavigate } from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
