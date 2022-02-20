import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChattingModule } from '../chatting.module';

export class ChatRecord{
  id: string = '';
  sender: string = '';
  message: string = '';
  receiver: string = '';
}

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private socket: WebSocket;
  constructor(private http: HttpClient) {
    this.socket = new WebSocket("ws://localhost:8080/ws");
  }

  public sendMessage = (message: string) => {
    let msgObj = new ChatRecord();
    msgObj.sender = '521d0b41-cb13-405b-8ab4-1545a12c6bc7';
    msgObj.receiver = 'bb6119a0-6ae4-4e7c-b3f6-1e3ac3c06f6e';
    msgObj.message = message;
    this.socket.send(JSON.stringify(msgObj));
  }
}
