import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Article } from './article';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PHP_API_SERVER = 'http://m533-backend.test';

  constructor(private httpClient: HttpClient) {
  }

  getAllArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(`${this.PHP_API_SERVER}/api/v1/articles`);
  }
}
