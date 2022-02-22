import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChatRecord, ChatService } from './chat.service';
import {catchError} from "rxjs";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {

  public message: string = '';
  public toggle: boolean = false;
  private socket: WebSocket;
  constructor() {
    this.socket = new WebSocket("ws://localhost:8080/ws");
    this.socket.onmessage = (event: any) => {
      let msg = JSON.parse(event.data)
      let messageContainer = document.getElementById('Messages');
      if(messageContainer != null){
        if(Math.random() > 0.5){
          messageContainer.innerHTML += '<div class="received messages">' + msg.message + '</div>';
        }
        else{
          messageContainer.innerHTML += '<div class="sent messages">' + msg.message + '</div>';
        }
        messageContainer.innerHTML += '<br>';
      }
    }
  }

  ngOnInit(): void {
  }

  toggleEmojiWindow(){
    this.toggle = !this.toggle;
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
}
