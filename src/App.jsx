// import React from"react"
// import { BrowserRouter,Route,link } from "react-router-dom";
import Abouts from "./components/About";
import Cards from "./components/BestSellers";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sells from "./components/Pics";
import Cryto from "./components/Cryto";
import Footer from "./components/Footer";
import Nav from "./components/Navbar";
import Copy from "./components/Copyrights";



function App() { 
  return (
  <>
  
  <Nav/>
  <Hero/>
  <Abouts/>
  <Cards/>
  <Sells/>
  <Cryto/>
  <Footer/>
  <Copy/>
  
  
  </>

  );
}
export default App;
