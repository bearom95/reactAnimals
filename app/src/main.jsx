import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { App } from './App';
import { Detail } from './pages/Detail';
import { Finder } from './pages/Finder';
import { Form } from './pages/Form';
import { Gallery } from './pages/Gallery';
import { Home } from './pages/Home';
import { Notfound } from './pages/Notfound';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="finder" element={<Finder />} />
          <Route path="form" element={<Form />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="gallery/:id" element={<Detail />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
