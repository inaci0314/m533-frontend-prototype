import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../api.service';
import { Article } from '../article';
import { Category } from '../category';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  categoryId: number;
  category: Category;
  articles: Article[];
  constructor(private route: ActivatedRoute, private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.categoryId = params['category'];
    })

    // If there's a category id, get articles by category
    if (this.categoryId != null) {
      this.apiService.getArticlesByCategory(this.categoryId).subscribe((articles: Article[]) => {
        this.articles = articles;
        // And get the category
        this.apiService.getCategory(this.categoryId).subscribe((category: Category) => {
          this.category = category;
        })
      })
    }
    else {
      // Otherwise, get all articles
      this.apiService.getAllArticles().subscribe((articles: Article[]) => {
        this.articles = articles;
      })
    }
  }

}
