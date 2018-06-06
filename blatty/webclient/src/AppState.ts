import * as signalR from '@aspnet/signalr';
import {observable} from 'mobx';

export default class AppState {
     @observable
     public username:any = null;

     @observable
     public signalrconnection:any = null;

     constructor() {
        this.signalrconnection = new signalR.HubConnectionBuilder()
        .withUrl("/hub")
        .build();
     }

     public setUserName = (username:any) => this.username = username;
}