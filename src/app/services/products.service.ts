import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  BASE_URL = 'https://shop-online-server.herokuapp.com/api/product/';
  GET_ALL_PRODCUT_NUMBER = this.BASE_URL + 'all-products-number';
  GET_ALL_PRODCUTS = this.BASE_URL + 'all-products';
  allProductsListener: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  productsList: Product[] = [];

  constructor(private http: HttpClient) { }
    getProductsNumber(): Observable<number> {
      return this.http.get<number>(this.GET_ALL_PRODCUT_NUMBER);
    }
    getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.GET_ALL_PRODCUTS);
    }
}
