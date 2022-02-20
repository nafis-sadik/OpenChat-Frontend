import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public message: string = '';
  public toggle: boolean = false;
  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
  }

  toggleEmojiWindow(){
    if(this.toggle)
      this.toggle = false;
    else
      this.toggle = true;
  }

  addEmoji(event: any){
    this.message += event.emoji.native;
  }

  send(message: HTMLInputElement){
    this.chatService.sendMessage(message.value)
  }
}
