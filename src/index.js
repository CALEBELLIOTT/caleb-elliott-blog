import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import './index.css'
import AboutPage from "./pages/About";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App></App>}>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/about' element={<AboutPage></AboutPage>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);