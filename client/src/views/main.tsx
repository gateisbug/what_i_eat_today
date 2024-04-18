import React from 'react';

import ReactDOM from 'react-dom/client';

import '@styles/fonts.css';
import '@styles/reset.css';
import '@styles/theme.css';
import '@styles/typography.css';
import '@styles/index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
