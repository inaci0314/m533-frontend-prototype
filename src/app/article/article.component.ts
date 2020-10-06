import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { articles } from "../articles";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.article = articles[+params.get("id")];
    })
  }

}
