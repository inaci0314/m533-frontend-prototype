import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../api.service';
import { CartService } from '../cart.service';
import { Article } from '../article';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article: Article;
  articleForm;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.articleForm = this.formBuilder.group({
      quantity: 1
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.apiService.getArticleById(+params.get("id")).subscribe((article: Article) => {
        this.article = article;
        // TODO: return to a "Not Found" page if the item doesn't exist
      })
    })
  }

  private addToCart(quantity) {
    this.cartService.addToCart(this.article, quantity);
  }

  onSubmit(data) {
    this.addToCart(data["quantity"]);
  }
}
