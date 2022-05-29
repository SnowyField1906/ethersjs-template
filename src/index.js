import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

export { default as Loader } from './components/Loader';
export { default as Navbar } from './components/Navbar';
export { default as Services } from './components/Services';
export { default as Transactions } from './components/Transactions';
export { default as Footer } from './components/Footer';
export { default as Welcome } from './components/Welcome';