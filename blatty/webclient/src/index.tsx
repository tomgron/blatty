import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import AppState from './AppState';
import './styles/main.css';

const appState = new AppState();

ReactDOM.render(
  <App appState={appState} />,
  document.getElementById('root') as HTMLElement
);
