import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
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
    localStorage.setItem('userId', String(prompt('Please provide sender id')));
    localStorage.setItem('receiver', String(prompt('Please provide receiver id')));
    this.socket = new WebSocket("ws://localhost:8080/connect/" + localStorage.getItem('userId'));
    this.socket.onmessage = (event: any) => {
      let msg = JSON.parse(event.data)
      let messageContainer = document.getElementById('Messages');
      if(messageContainer != null){
        if(msg.receiver != null && msg.receiver != localStorage.getItem('userId')){
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
    let receiver = localStorage.getItem('receiver');
    if(userId == null){
      alert('Invalid Sender');
      return
    }
    if(receiver == null){
      alert('Invalid Receiver');
      return
    }
    msgObj.sender = String(userId);
    msgObj.receiver = receiver;
    msgObj.message = message.value;
    this.socket.send(JSON.stringify(msgObj));
    message.value = '';
  }
}
