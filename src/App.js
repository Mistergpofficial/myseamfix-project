import './App.css';
import Header from './layout/Header';
import Navbar from './layout/Navbar';
import {
	BrowserRouter as Router,
  } from "react-router-dom";

function App() {
  return (
    <>
	 <Router>
	  <Header></Header>
      <Navbar></Navbar>

    </Router>

	</>
  );
}

export default App;
