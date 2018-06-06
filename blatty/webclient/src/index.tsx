import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import AppState from './AppState';
import './styles/main.css';

// const connection = new signalR.HubConnectionBuilder()
// .withUrl("/hub")
// .build();

// connection.on("ReceiveMessage", (user, message) => {
//   console.log("Message received", user, message);
// })

// connection.start()
//   .then(()=> {
//     connection.invoke("SendMessage","foo", "lets go to bar");
//   })
//   .catch(err => console.error(err.toString()))

// console.log(connection);

const appState = new AppState();

ReactDOM.render(
  <App appState={appState} />,
  document.getElementById('root') as HTMLElement
);
