import { Injectable } from '@angular/core';
import { Reply } from 'src/app/models/reply';

@Injectable({
  providedIn: 'root'
})
export class RepliesService {
  replies: Reply[];
  constructor() { 
    this.replies = [
      {
        id: 0,
        yourname: 'something',
        replytext: 'idk',
      },
    ];
  }

  getParticipants() {
    return this.replies;
  }

  addParticipant(
    yourname: string,
    replytext: string,
  ) {
    let lastParticipant = this.replies[this.replies.length - 1];
    let newId = lastParticipant.id + 1;

    this.replies.push({
      id: newId,
      yourname: yourname,
      replytext: replytext,
    });
  }
}