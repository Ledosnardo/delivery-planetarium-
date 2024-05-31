import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AddressProvider from './contexts/AddressContexts';
import AppRoutes from './AppRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AddressProvider>
      <AppRoutes />    
    </AddressProvider>
  </React.StrictMode>
);