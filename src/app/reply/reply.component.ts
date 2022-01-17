import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reply } from '../models/reply';
import { RepliesService } from '../services/replies/replies.service';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {
  reply: Reply;
  constructor(
  ) { 
    private repliesService: RepliesService,
    private route: ActivatedRoute
  ) {
    let id: number = route.snapshot.params['id'];
    this.Reply = RepliesService.getParticipant(id);
   }
  }

  ngOnInit(): void {
  }

}