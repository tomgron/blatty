import { observer } from 'mobx-react';
import * as React from 'react'
import AppState from './AppState';
import Message from './Message';

@observer
export default class Chat extends React.Component<{appState: AppState}, {message:string}> {

  constructor(props) {
    super(props);
    
    this.state = { message : ""}
  }

  public render() {
    const logout = async () => {
        await this.props.appState.removeUserFromStack(this.props.appState.username);
        await this.props.appState.disconnectFromHub();
        await this.props.appState.setUserName(null);
    } 

    const onType = e => this.setState({ message : e.target.value });

    const onSubmitMessge = async () => {
      await this.props.appState.sendMessage(this.props.appState.username, this.state.message);
      await this.props.appState.getMessages();
      
    };

    return (
      <div className="chat">
        <div className="left_column">
          <div>
            {this.props.appState.messages && this.props.appState.messages.map((msg, index) => {
              return (<Message key={index} message={msg}/>)
            })
          }
          </div>
          <div>
            <input name="message" onChange={onType} />
            <button onClick={onSubmitMessge}>Send</button>
          </div>
        </div>
        <div className="right_column">
          <div className="header">ONLINE</div>
          <div>
            {this.props.appState.connectedUsers && this.props.appState.connectedUsers.map((user:any, index) => {
              return (<div key={index}>{user.name}</div>)
            })}
          </div>
          <div>
              <button onClick={logout}>Leave blatter</button>
          </div>
        </div>
      </div>
    )
  }
}
