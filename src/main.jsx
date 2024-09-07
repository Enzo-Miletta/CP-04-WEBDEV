import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'

import App from './App.jsx'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/sobre',
        element: <Sobre />
      },
      {
        path: '/contato',
        element: <Contato />
      }
    ]
  },
  {
    path: '*',
    element: <h1>Página não encontrada</h1>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)