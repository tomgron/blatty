import { observer } from 'mobx-react';
import * as React from 'react'
import AppState from './AppState';

@observer
export default class Chat extends React.Component<{appState: AppState}, {}> {
  public render() {

    const logout = async () => {
        await this.props.appState.removeUserFromStack(this.props.appState.username);
        await this.props.appState.disconnectFromHub();
        await this.props.appState.setUserName(null);

        console.log(this.props.appState.signalrconnection);
    } 

    return (
      <div>
        <div>Welcome {this.props.appState.username}</div>
        <div>
            <button onClick={logout}>Leave blatter</button>
        </div>
      </div>
    )
  }
}
