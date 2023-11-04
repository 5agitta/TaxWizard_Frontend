import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';

axios.defaults.baseURL = `${import.meta.env.VITE_BASE_URL}`

axios.interceptors.request.use(request => {
    console.log(request);
    const authToken = localStorage.getItem("authToken");
    request.headers['Authorization'] = `Bearer ${authToken}`;
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

