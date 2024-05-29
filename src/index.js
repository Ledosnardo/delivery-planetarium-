import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AddressRegistration from './pages/AddressRegistration';
import AddressProvider from './contexts/AddressContexts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AddressProvider>
      <AddressRegistration />
    </AddressProvider>
  </React.StrictMode>
);