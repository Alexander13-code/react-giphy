import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './components/app';

import '../assets/stylesheets/application.scss';

// const root = document.getElementById('root');
// if (root) {
//   ReactDOM(
//     <App />,
//     root
//   );
// }

createRoot(document.getElementById('root')).render(
  <App />
);
