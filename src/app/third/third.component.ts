import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  thirdGroup: FormGroup;
  constructor() { 
    this.thirdGroup = new FormGroup({
    number: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
  })
  ;}
  

  ngOnInit(): void {
  }

  

}


