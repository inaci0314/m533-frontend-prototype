import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Category } from './category';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PHP_API_SERVER_V1 = 'http://m533-backend.test/api/v1';

  constructor(private httpClient: HttpClient) {
  }

  getAllArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(`${this.PHP_API_SERVER_V1}/articles`);
  }

  getArticlesByCategory(categoryId: number): Observable<Article[]> {
    return this.httpClient.get<Article[]>(`${this.PHP_API_SERVER_V1}/articles?category=${categoryId}`);
  }

  getArticleById(id: number): Observable<Article> {
    return this.httpClient.get<Article>(`${this.PHP_API_SERVER_V1}/articles/${id}`);
  }

  getCategories(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(`${this.PHP_API_SERVER_V1}/categories`);
  }

  getCategory(id: number): Observable<Category> {
    return this.httpClient.get<Category>(`${this.PHP_API_SERVER_V1}/categories/${id}`);
  }
}
