import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Import React Pages
import './index.css';
import App from './App';
import Localizacao from './Paginas/Localizacao';
import Servicos from './Paginas/Servicos';
import Contatos from './Paginas/Contatos'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/localizacao",
    element: <Localizacao />
  },
  {
    path: "/servicos",
    element: <Servicos />
  },
  {
    path: "/Contatos",
    element: <Contatos />
  }
], {
  basename: process.env.PUBLIC_URL,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
