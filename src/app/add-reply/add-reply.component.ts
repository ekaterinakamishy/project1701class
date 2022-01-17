import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RepliesService } from '../services/replies/replies.service';

@Component({
  selector: 'app-add-reply',
  templateUrl: './add-reply.component.html',
  styleUrls: ['./add-reply.component.css']
})
export class AddReplyComponent implements OnInit {
  replyGroup: FormGroup;
  constructor(private repliesService: RepliesService) { 
    this.replyGroup = new FormGroup({
      yourname: new FormControl('', [Validators.required]),
      replytext: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  create(){
    this.repliesService.addParticipant(
      this.replyGroup.controls['yourname'].value,
      this.replyGroup.controls['replytext'].value,
    );
  }

}