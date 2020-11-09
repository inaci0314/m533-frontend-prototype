import { Component, OnInit } from '@angular/core';
import { articles } from "../articles";

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    },
    {
      id: 3,
      name: "Category 4"
    },
    {
      id: 4,
      name: "Category 5"
    }
  ];
  
  articles;
  
  constructor() {
    this.articles = articles;
  }

  ngOnInit(): void {
  }

}
