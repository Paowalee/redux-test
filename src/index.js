import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import App from '.components/App';
import reportWebVitals from './reportWebVitals';
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Router>
        <App />
      </Router>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
