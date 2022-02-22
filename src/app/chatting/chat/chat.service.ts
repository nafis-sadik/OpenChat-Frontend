import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ChatRecord{
  id: string = '';
  sender: string = '';
  message: string = '';
  receiver: string = '';
}

export class ChatService {
  constructor(private http: HttpClient) {
  }
}
