import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  BASE_URL = environment.serverURL + 'product/';
  GET_ALL_PRODCUT_NUMBER = this.BASE_URL + 'all-products-number';
  GET_ALL_PRODCUTS = this.BASE_URL + 'all-products';
  GET_PRODCUTS_BY_CATEGORY = this.BASE_URL + 'category/';
  GET_PRODCUTS_BY_SEARCH = this.BASE_URL + 'search/';
  allProductsListener: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  productsList: Product[] = [];

  constructor(private http: HttpClient) {
    console.log(environment.serverURL)
   }
  
    getProductsNumber(): Observable<number> {
      return this.http.get<number>(this.GET_ALL_PRODCUT_NUMBER);
    }
    getProductsAsObservable(): Observable<Product[]> {
      return this.allProductsListener.asObservable();
    }
    getAllProducts() {
    this.http.get<Product[]>(this.GET_ALL_PRODCUTS).subscribe(allProducts =>{
        this.productsList = allProducts;
        this.allProductsListener.next(this.productsList);
    });
    }
    getProductsByCategories(categoryId: string) {
      this.http.get<Product[]>(this.GET_PRODCUTS_BY_CATEGORY + categoryId)
      .subscribe(productsByCategory => {
        this.allProductsListener.next(productsByCategory);
      });
    }
    searchProduct(searchProduct: string){
      this.http.get<Product[]>(this.GET_PRODCUTS_BY_SEARCH + searchProduct)
      .subscribe(products =>{
        this.productsList = products;
        this.allProductsListener.next(this.productsList);
      })
    }

    addProduct(procuctAdd: Product){
      this.productsList.push(procuctAdd);
      this.allProductsListener.next(this.productsList);
    }
}
