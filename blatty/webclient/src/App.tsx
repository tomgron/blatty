import { observer } from 'mobx-react';
import * as React from 'react';

import AppState from './AppState';
import Chat from './Chat';
import Login from './Login';

@observer
export default class App extends React.Component<{appState: AppState}, {}> {

  public render() {
    return (
         this.props.appState.username ? 
         <Chat appState={this.props.appState}/> : 
         <Login appState={this.props.appState}/>
    );
  }
}
