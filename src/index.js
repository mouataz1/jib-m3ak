import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/register';
import RessetPassword from './pages/ressetPassword';
import Dashboard from './pages/dashboard';
import Space from './pages/space';
import Profile from './pages/profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<Register />} />
      <Route path="/resset-password" element={<RessetPassword/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/space" element={<Space/>} />
      <Route path="/ptofile" element={<Profile/>} />

    </Routes>
    
  </React.StrictMode>
  </BrowserRouter>
);
reportWebVitals();
