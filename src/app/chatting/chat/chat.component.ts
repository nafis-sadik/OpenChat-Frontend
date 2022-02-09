import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public message: string = '';
  public toggle: string = 'none';

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleEmojiWindow(){
    if(this.toggle == 'none'){
      this.toggle = 'block';
    }
    else{
      this.toggle = 'none';
    }
  }

  addEmoji(event: any){
    this.message += event.emoji.native;
  }

}
