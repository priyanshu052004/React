import { useState } from 'react'

import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Services";

export default function App() {


  return (
   <>
   <Router>
      <Header />

      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </div>
      <Footer />
    </Router>
   </>
   
  )
}

