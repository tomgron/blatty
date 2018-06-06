import * as signalR from '@aspnet/signalr';
import {observable} from 'mobx';

export default class AppState {
    @observable
    public username:any = null;

    @observable
    public signalrconnection:signalR.HubConnection;

    @observable
    public isConnected:boolean = false;

    @observable
    public connectedUsers:string[];

    constructor() {
        this.signalrconnection = new signalR.HubConnectionBuilder()
        .withUrl("/hub")
        .build();
    }

    // Methods
    public setUserName = (username:any) => this.username = username;
    public addUserToStack = (username:any) => this.signalrconnection.invoke("AddUser", username);
    public removeUserFromStack = (username:any) => this.signalrconnection.invoke("RemoveUser", username);
    public connectToHub = () => this.signalrconnection.start()
        .then(() => this.isConnected = true)
        .catch(error => { 
            console.error("Error when connecting: ",error.toString()); 
        }
    );

    public disconnectFromHub = () => this.signalrconnection.stop().then(() => this.isConnected = false).catch(error => console.error(error.toString()));
}