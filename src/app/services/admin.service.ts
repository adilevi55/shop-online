import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from './products.service';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  BASE_PRODUCT_URL = 'https://shop-online-server.herokuapp.com/api/product/';

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
  updateProductsInProductService(productUpdated){
    
    this.productsService.productsList.forEach((p,index) => {
        
      if (p._id === productUpdated._id) {
        this.productsService.productsList[index] = productUpdated;
      }
      this.productsService.allProductsListener.next(this.productsService.productsList);
      
    });
  }

  
}
