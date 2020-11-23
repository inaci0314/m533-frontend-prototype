import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  myForm:FormGroup;

  constructor() { }

 ngOnInit(){
         this.myForm = new FormGroup({
           
         })
    }

}
