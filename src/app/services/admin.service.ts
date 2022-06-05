import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from './products.service';
import { Product } from '../interfaces/product.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  BASE_PRODUCT_URL = environment.serverURL + 'product/';
  ADD_PRODUCT_URL = this.BASE_PRODUCT_URL + 'add';
  constructor(
    private http: HttpClient,
    private productsService: ProductsService
  ) { }

  updateProductHttpReq(product: FormData, productId: string){
   this.http.put<Product>(this.BASE_PRODUCT_URL + productId,product).subscribe(productUpdated =>{
     alert('Product Updated');
    this.updateProductsInProductService(productUpdated);
   })
  }
  addProductHttpReq(product: FormData){
    this.http.post<Product>(this.ADD_PRODUCT_URL, product).subscribe(productAdded => {
      this.productsService.addProduct(productAdded);
      alert('Product Added');
      
    })
  }
  updateProductsInProductService(productUpdated){
    
    this.productsService.productsList.forEach((p,index) => {
        
      if (p._id === productUpdated._id) {
        this.productsService.productsList[index] = productUpdated;
      }
      this.productsService.allProductsListener.next(this.productsService.productsList);
      
    });
  }

  
}
