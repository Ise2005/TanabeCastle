import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Appコンポーネントをインポートする
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Router basename="/TanabeCastle/">
        <App />
      </Router>
    </React.StrictMode>
  );
}
