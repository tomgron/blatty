import { observer } from 'mobx-react';
import * as React from 'react'
import AppState from './AppState';

@observer
export default class Chat extends React.Component<{appState: AppState}, {}> {
  public render() {

    const logout = () => this.props.appState.setUserName(null);

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
