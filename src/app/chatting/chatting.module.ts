import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { RouterModule } from '@angular/router';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { FormsModule } from '@angular/forms';
import { ChatService } from './chat/chat.service';

export const routes = [
  { path : '', component: ChatComponent, pathMatch: 'full' }
]

@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PickerModule,
    FormsModule
  ],
  providers:[
    ChatService
  ]
})
export class ChattingModule { }
