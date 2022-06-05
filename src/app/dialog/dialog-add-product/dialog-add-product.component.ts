import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Product, ProductAdminAdd } from 'src/app/interfaces/product.interface';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/category.service';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/interfaces/category.interface';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-dialog-add-product',
  templateUrl: './dialog-add-product.component.html',
  styleUrls: ['./dialog-add-product.component.css']
})
export class DialogAddProductComponent implements OnInit, OnDestroy{
  subscription: Subscription;
  product: ProductAdminAdd = {
    name: null,
    category: null,
    price: null,
    img: null
  };
  categories: Category[];
  productsFormData: FormData;
  imgURL:string| ArrayBuffer = '';

  constructor(
    private matDialog: MatDialog,
    private categoryService: CategoryService,
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.productsFormData = new FormData();
    this.subscription = this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    })
  }

  onFileSelected(event) {
    if(event.target.files[0] !== undefined){
    this.productsFormData.append('img', event.target.files[0], event.target.files[0].name);
    this.product.img =  event.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }
  }
  userExitDialog() {
    this.matDialog.closeAll();
  }
  addProduct(){
      this.productsFormData.append('name', this.product.name);
      this.productsFormData.append('category', this.product.category);
      this.productsFormData.append('price', this.product.price.toString());
      this.adminService.addProductHttpReq(this.productsFormData);
      this.matDialog.closeAll();
  }
  ngOnDestroy(): void {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }

}
