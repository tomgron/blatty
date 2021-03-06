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
    public messages:any[] = [];

    @observable
    public connectedUsers:string[] = [];

    constructor() {
        this.signalrconnection = new signalR.HubConnectionBuilder()
        .withUrl("/hub")
        // .withUrl("http://localhost:5000/hub")
        .configureLogging(signalR.LogLevel.None)
        .build();

        // This does logout when closing window...does not solve client crashes
        window.onbeforeunload = (e) => {
            this.removeUserFromStack(this.username).then(() =>this.disconnectFromHub());
        }

        // Register callbacks
        this.signalrconnection.on("AddUser", (users) => this.connectedUsers = users);
        this.signalrconnection.on("RemoveUser", (users:string[]) => this.connectedUsers = users);
        this.signalrconnection.on("ReceiveMessage", (user: string, message:string) => this.getMessages());
    }

    // Methods
    public getMessages = async () => {
        const messages = await this.signalrconnection.invoke("GetMessages");

        this.messages = [];

        messages.map(item => {
            this.messages.push({username: item.item1, message: item.item2});
        });
    }

    public sendMessage = async (username:any, message:any) => this.signalrconnection.invoke("SendMessage", username, message);
    public setUserName = async (username:any) => this.username = username;
    public addUserToStack = async (username:any) => this.signalrconnection.invoke("AddUser", username);
    public removeUserFromStack = async (username:any) => this.signalrconnection.invoke("RemoveUser", username);
    public connectToHub = async () => this.signalrconnection.start()
        .then(() => {
            this.isConnected = true
            this.getMessages();
        })
        .catch(error => { 
            console.error("Error when connecting: ",error.toString()); 
        }
    );

    public disconnectFromHub = async () => this.signalrconnection.stop().then(() => this.isConnected = false).catch(error => console.error(error.toString()));
}