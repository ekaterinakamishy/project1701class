import { Component, OnInit } from '@angular/core';
import { Reply } from '../models/reply';
import { RepliesService } from '../services/replies/replies.service';

@Component({
  selector: 'app-replies',
  templateUrl: './replies.component.html',
  styleUrls: ['./replies.component.css']
})
export class RepliesComponent implements OnInit {
  replies: Reply[];
  constructor(private repliesService: RepliesService) { 
    this.replies = repliesService.getParticipants();
  }

  ngOnInit(): void {
  }

}