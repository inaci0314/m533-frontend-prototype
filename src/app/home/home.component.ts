import { Component, OnInit } from '@angular/core';
import { Category } from "../category";
import { ApiService } from "../api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: Category[];
  
  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
    })
  }

}
