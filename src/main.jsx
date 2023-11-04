import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App.jsx';
import AboutPage from './pages/About.jsx';
import ContactPage from './pages/Contact.jsx'; 
import PortfolioPage from './pages/Portfolio.jsx';
import ResumePage from './pages/Resume.jsx'; 



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router} />
)
