import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Article } from '../article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: Article[];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllArticles().subscribe((articles: Article[]) => {
      this.articles = articles;
      console.log(this.articles);
    }
    )
  }

}
