import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import { StoreProvider } from './Store';

const root = ReactDOM.createRoot(document.getElementById('aelita'));
root.render(
  <StoreProvider>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StoreProvider>
);

