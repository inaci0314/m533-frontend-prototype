import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../api.service';
import { CartService } from '../cart.service';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article: Article;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.apiService.getArticleById(+params.get("id")).subscribe((article: Article) => {
        this.article = article;
        // TODO: return error 404 (error page) if item doesn't exist
      })
    })
  }
  
  addToCart(article) {
    let quantity = 1;
    this.cartService.addToCart(article, quantity);
  }
}
