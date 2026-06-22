const React = require('react');
const ReactDOM = require('react-dom/client');
require('./index.css');
const App = require('./App').default; // Récupère le composant par défaut

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);