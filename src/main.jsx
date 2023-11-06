import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App.jsx';
import About from './pages/AboutPage.jsx';
import Contact from './pages/Contact.jsx'; 
import Portfolio from './pages/Portfolio.jsx';
import Resume from './pages/Resume.jsx'; 
import ErrorPage from './pages/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: 'profile/:id',
        element: <Contact />,
      },
      {
        path: 'about',
        element: <Portfolio />,
      },
      {
        path: 'resume',
        element: <Resume />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router} />
)
