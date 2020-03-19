import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  BASE_URL = 'https://shop-online-server.herokuapp.com/api/category/';
  GET_ALL_CATEGORIES = this.BASE_URL + 'all-categoies';
  constructor(
    private http: HttpClient,
  ) { }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.GET_ALL_CATEGORIES);
  }
}
