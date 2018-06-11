import { observer } from 'mobx-react';
import * as React from 'react'
import AppState from './AppState';

@observer
export default class Login extends React.Component<{appState: AppState}, {username:any}> {
    constructor(props) {
        super(props);
        this.state = { username: null};
    }

    public render() {
        const loginUser = async (e) => {
            if (this.state.username) {
                await this.props.appState.setUserName(this.state.username)
                await this.props.appState.connectToHub();
                await this.props.appState.addUserToStack(this.state.username);
            } else {
                await this.props.appState.setUserName(null);
            }
        }

        const onType = (e) => this.setState({username:e.target.value});
        
        return (
            <div className="chat">
                <div>Username, pick one</div>
                <input onChange={onType} name="user_name"/>
                <button onClick={loginUser}>Go to blatter</button>
            </div>
        )
    }
}
