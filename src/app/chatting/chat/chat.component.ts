import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public message: string = '';
  public toggle: boolean = false;

  constructor() {
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
    this.message += event.emoji.native;
  }
}
