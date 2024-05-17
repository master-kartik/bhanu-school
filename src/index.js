import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import { ThemeProvider } from "@material-tailwind/react";
import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/Home';

import { About, ContactUs } from './components';

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='contact' element={<ContactUs/>}/>
      <Route path='about' element={<About/>}/>

    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
     <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>
);

