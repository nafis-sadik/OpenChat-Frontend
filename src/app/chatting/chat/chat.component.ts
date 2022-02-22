import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChatRecord, ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {

  public message: string = '';
  public toggle: boolean = false;
  public messages: string[] = [];
  private socket: WebSocket;
  constructor() {
    this.messages.push('Hello World');
    this.messages.push('Test Message');
    this.socket = new WebSocket("ws://localhost:8080/ws");
    this.socket.onmessage = function(event: any) {
      console.log(event.data);
      // messages.push(event.data);
      // ChatComponent.messages.push(JSON.parse(event.data).message);
    }
  }

  ngOnInit(): void {
  }

  toggleEmojiWindow(){
    if(this.toggle)
      this.toggle = false;
    else
      this.toggle = true;
  }

  addEmoji(event: any){
    console.log(event.emoji.native)
    this.message += event.emoji.native;
  }

  send(message: HTMLInputElement){
    let msgObj = new ChatRecord();
    let userId = localStorage.getItem('userId');
    if(userId === null)
      userId = '521d0b41-cb13-405b-8ab4-1545a12c6bc7';
    msgObj.sender = userId;
    msgObj.receiver = '82678b65-25d4-4191-a860-e58e1820cf9c';
    msgObj.message = message.value;
    this.socket.send(JSON.stringify(msgObj));
    message.value = '';
  }

  public sendMessage = (message: string) => {
  }
}
