import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories = [
    {
      id: 0,
      name: "Category 1"
    },
    {
      id: 1,
      name: "Category 2"
    },
    {
      id: 2,
      name: "Category 3"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
