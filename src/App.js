import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
     <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/about" element={<About />} />
 <Route path="/projects" element={<Project />} />
 <Route path="/blog" element={<Blog />} />
 <Route path="/contact" element={<Contact />} />
        </Routes>
        </BrowserRouter>
  );
}

export default App;
