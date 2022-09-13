import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Blog from "./pages/Blog";
import './index.css'
import AboutPage from "./pages/About";
import Portfolio from './pages/portfolio/Portfolio';
import HomePage from "./pages/home/HomePage";
import BlogPost from "./pages/blog-post/BlogPost";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App></App>}>
        <Route path='/blog/*' element={<Blog />}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/about' element={<AboutPage></AboutPage>}></Route>
        <Route path='/blog/:id' element={<BlogPost></BlogPost>}></Route>
        <Route index element={<HomePage></HomePage>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);